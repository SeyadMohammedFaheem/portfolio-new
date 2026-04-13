/**
 * convert-images.mjs
 * Converts all PNG/JPG images in /public to WebP using sharp,
 * then rewrites every image path in /src to use the new .webp extension.
 *
 * Usage: node scripts/convert-images.mjs
 */

import sharp from 'sharp';
import { readdir, stat, writeFile, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PUBLIC = path.join(ROOT, 'public');
const SRC    = path.join(ROOT, 'src');

// Quality for WebP conversion (0–100). 82 gives ~60-75% size reduction vs JPEG/PNG
const WEBP_QUALITY = 82;

// Extensions to convert
const CONVERTIBLE = ['.png', '.jpg', '.jpeg'];

// Files / folders to skip (e.g. favicon should stay as PNG/SVG, GIFs skipped separately)
const SKIP = ['favicon.png', 'favicon.svg'];

// ─── 1. Walk the public directory and collect images to convert ────────────────
async function walk(dir, files = []) {
  for (const entry of await readdir(dir)) {
    const full = path.join(dir, entry);
    const s = await stat(full);
    if (s.isDirectory()) {
      await walk(full, files);
    } else {
      const ext = path.extname(entry).toLowerCase();
      if (CONVERTIBLE.includes(ext) && !SKIP.includes(entry)) {
        files.push(full);
      }
    }
  }
  return files;
}

// ─── 2. Convert a single image to WebP ────────────────────────────────────────
async function convertToWebP(srcPath) {
  const webpPath = srcPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');

  // Skip if WebP already exists and is newer
  if (existsSync(webpPath)) {
    const srcStat  = await stat(srcPath);
    const webpStat = await stat(webpPath);
    if (webpStat.mtimeMs >= srcStat.mtimeMs) {
      return { path: webpPath, skipped: true };
    }
  }

  await sharp(srcPath)
    .webp({ quality: WEBP_QUALITY, effort: 4 })
    .toFile(webpPath);

  const origSize = (await stat(srcPath)).size;
  const newSize  = (await stat(webpPath)).size;
  return { path: webpPath, skipped: false, origSize, newSize };
}

// ─── 3. Rewrite references in /src ────────────────────────────────────────────
async function patchSrcFile(filePath, conversions) {
  let content = await readFile(filePath, 'utf-8');
  let changed = false;

  for (const { origRelPath, webpRelPath } of conversions) {
    // Match the original relative path (with any of its extensions)
    const escaped = origRelPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(escaped, 'g');
    if (re.test(content)) {
      content = content.replace(new RegExp(escaped, 'g'), webpRelPath);
      changed = true;
    }
  }

  if (changed) {
    await writeFile(filePath, content, 'utf-8');
  }
  return changed;
}

async function walkSrc(dir, files = []) {
  for (const entry of await readdir(dir)) {
    const full = path.join(dir, entry);
    const s = await stat(full);
    if (s.isDirectory()) {
      await walkSrc(full, files);
    } else if (/\.(jsx?|tsx?|css|html|json)$/.test(entry)) {
      files.push(full);
    }
  }
  return files;
}

// ─── Main ─────────────────────────────────────────────────────────────────────
(async () => {
  console.log('🔍 Scanning public/ for images…');
  const images = await walk(PUBLIC);
  console.log(`   Found ${images.length} convertible images.\n`);

  let totalSaved = 0;
  const conversions = [];

  for (const imgPath of images) {
    const result = await convertToWebP(imgPath);
    const origRelPath = '/' + path.relative(PUBLIC, imgPath).replace(/\\/g, '/');
    const webpRelPath = origRelPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');

    conversions.push({ origRelPath, webpRelPath });

    if (result.skipped) {
      console.log(`  ⏭  Skipped (up-to-date): ${origRelPath}`);
    } else {
      const saved = result.origSize - result.newSize;
      totalSaved += saved;
      const pct = Math.round((saved / result.origSize) * 100);
      console.log(
        `  ✅ ${origRelPath.padEnd(60)} ${kb(result.origSize)} → ${kb(result.newSize)}  (−${pct}%)`
      );
    }
  }

  console.log(`\n💾 Total saved: ${kb(totalSaved)} across ${images.length} images.\n`);

  // Patch src + index.html + data files
  console.log('✏️  Patching source file references…');
  const srcFiles = [
    ...(await walkSrc(SRC)),
    path.join(ROOT, 'index.html'),
  ];

  let patchedCount = 0;
  for (const f of srcFiles) {
    const patched = await patchSrcFile(f, conversions);
    if (patched) {
      console.log(`  📝 Updated: ${path.relative(ROOT, f)}`);
      patchedCount++;
    }
  }

  console.log(`\n✨ Done! Patched ${patchedCount} source files.`);
  console.log('   Original images are kept — delete them manually after verifying the site looks correct.');
})();

function kb(bytes) {
  return `${Math.round(bytes / 1024)} KB`;
}
