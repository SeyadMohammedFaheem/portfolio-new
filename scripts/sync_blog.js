import { Client } from "@notionhq/client";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const notion = new Client({ auth: process.env.NOTION_KEY });
const targetId = process.env.NOTION_DATABASE_ID;

if (!process.env.NOTION_KEY || !process.env.NOTION_DATABASE_ID) {
  console.error("❌ ERROR: Missing NOTION_KEY or NOTION_DATABASE_ID in .env file.");
  process.exit(1);
}

async function fetchAllBlocks(blockId) {
  let blocks = [];
  let cursor = undefined;

  while (true) {
    const response = await notion.blocks.children.list({
      block_id: blockId,
      start_cursor: cursor,
    });
    blocks.push(...response.results);
    if (!response.has_more) break;
    cursor = response.next_cursor;
  }
  return blocks;
}

/**
 * Local Image Helper: Finds the correct local path for a blog image.
 * Tries .png and .jpg extensions in public/images/blogs/
 */
function getLocalImagePath(slug, type = "hero", index = 0) {
  const localDir = path.join(process.cwd(), "public", "images", "blogs");
  
  // Potential paths:
  // 1. For hero: /images/blogs/delete-button-case-study.png
  // 2. For inline: /images/blogs/delete-button-case-study/image-1.png
  
  let targetFile = type === "hero" 
    ? `${slug}` 
    : path.join(`${slug}`, `image-${index}`);

  const extensions = [".png", ".jpg", ".jpeg", ".webp"];
  
  for (const ext of extensions) {
    if (fs.existsSync(path.join(localDir, targetFile + ext))) {
      return `/images/blogs/${targetFile.replace(/\\/g, "/")}${ext}`;
    }
  }

  // Fallback if no specific manual image exists
  return type === "hero" ? "/images/insights.png" : null;
}

function parseBlocks(blocks, slug) {
  let imageCount = 0;
  return blocks.map((block) => {
    const type = block.type;
    const content = block[type];

    let text = "";
    if (content?.rich_text) {
      text = content.rich_text.map((rt) => rt.plain_text).join("");
    }

    if (type === "paragraph") return { type: "p", text };
    if (type === "heading_1") return { type: "h1", text };
    if (type === "heading_2") return { type: "h2", text };
    if (type === "heading_3") return { type: "h3", text };
    if (type === "bulleted_list_item") return { type: "li", text, listType: "bullet" };
    if (type === "numbered_list_item") return { type: "li", text, listType: "number" };
    
    if (type === "image") {
      imageCount++;
      // Automation removed: Using local path convention for manual image management
      // Looks for: /public/images/blogs/[slug]/image-[1, 2, 3...].png
      const localUrl = getLocalImagePath(slug, "inline", imageCount);
      const notionUrl = content.type === "external" ? content.external.url : content.file.url;
      const caption = content.caption?.[0]?.plain_text || "";
      
      return { 
        type: "img", 
        url: localUrl || notionUrl, // Use local if exists, else fallback to Notion for previewing
        caption 
      };
    }
    
    if (type === "divider") return { type: "hr" };
    if (type === "quote") return { type: "quote", text };

    return null;
  }).filter(Boolean);
}

async function main() {
  try {
    console.log("Searching for blog pages in Notion...");
    
    const response = await notion.search({
      filter: { property: "object", value: "page" }
    });

    const blogPages = response.results.filter(page => {
      return page.parent && page.parent.database_id && page.parent.database_id.replace(/-/g, "") === targetId.replace(/-/g, "");
    });

    if (blogPages.length === 0) {
      console.log("No blog pages found in the database. Make sure the database is shared with the integration.");
      return;
    }

    console.log(`Found ${blogPages.length} blog posts. Syncing...`);
    
    const postsData = [];

    for (const page of blogPages) {
      const pageId = page.id;
      const titleProp = page.properties.Name || page.properties.title || {};
      const title = titleProp.title?.[0]?.plain_text || "Untitled Post";
      const slug = page.properties.Slug?.rich_text?.[0]?.plain_text || title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]/g, "");
      const date = page.properties.Date?.date?.start || new Date(page.created_time).toISOString();
      const category = page.properties.Category?.select?.name || "Insights";

      // Automation removed: Use local image path convention
      const featuredImage = getLocalImagePath(slug, "hero");

      console.log(`- ${title} (Syncing content...)`);
      const blocks = await fetchAllBlocks(pageId);
      
      postsData.push({
        id: pageId,
        title,
        slug,
        date: new Date(date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }),
        category,
        content: parseBlocks(blocks, slug),
        image: featuredImage 
      });
    }

    const dataDir = path.join(process.cwd(), "src/data");
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
    
    fs.writeFileSync(
      path.join(dataDir, "blogsData.json"),
      JSON.stringify(postsData, null, 2)
    );

    console.log("✅ All blogs synchronized! Images now prioritize local files in public/images/blogs/");
  } catch (error) {
    console.error("❌ Sync failed:", error.message);
  }
}

main();
