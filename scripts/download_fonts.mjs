import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const FONTS_DIR = path.join(ROOT, 'public', 'assets', 'fonts', 'inter');

async function downloadFile(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to download: ${url} (${res.status})`);
  const arrayBuffer = await res.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  await fs.promises.writeFile(dest, buffer);
}

async function main() {
  console.log('🔄 Creating fonts directory...');
  await fs.promises.mkdir(FONTS_DIR, { recursive: true });

  console.log('🌐 Fetching Google Fonts CSS...');
  const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
  const response = await fetch(
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&display=swap',
    { headers: { 'User-Agent': userAgent } }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch Google Fonts CSS: ${response.status}`);
  }

  const css = await response.text();
  console.log('✅ Fetched CSS. Parsing font links...');

  // Match all font-face blocks
  const fontFaceRegex = /@font-face\s*\{[^}]*\}/g;
  const fontFaceBlocks = css.match(fontFaceRegex) || [];

  console.log(`Found ${fontFaceBlocks.length} font-face blocks.`);

  const localCssLines = [];

  for (const block of fontFaceBlocks) {
    // Extract weight
    const weightMatch = block.match(/font-weight:\s*(\d+)/);
    // Extract font-style
    const styleMatch = block.match(/font-style:\s*(\w+)/);
    // Extract src url
    const urlMatch = block.match(/url\((https:\/\/[^)]+\.woff2)\)/);

    if (weightMatch && urlMatch) {
      const weight = weightMatch[1];
      const style = styleMatch ? styleMatch[1] : 'normal';
      const url = urlMatch[1];
      
      const fileName = `inter-${style}-${weight}.woff2`;
      const localPath = path.join(FONTS_DIR, fileName);
      const relativeUrl = `/assets/fonts/inter/${fileName}`;

      console.log(`📥 Downloading Inter ${weight} (${style}) -> ${fileName}...`);
      try {
        await downloadFile(url, localPath);
        
        // Build local font face
        localCssLines.push(`@font-face {
  font-family: 'Inter';
  font-style: ${style};
  font-weight: ${weight};
  font-display: swap;
  src: url('${relativeUrl}') format('woff2');
}`);
      } catch (err) {
        console.error(`❌ Failed to download font: ${err.message}`);
      }
    }
  }

  const localCssContent = localCssLines.join('\n\n');
  const cssPath = path.join(FONTS_DIR, 'inter.css');
  await fs.promises.writeFile(cssPath, localCssContent, 'utf-8');
  console.log(`🎉 Fonts downloaded and saved! inter.css created at ${cssPath}`);
}

main().catch(console.error);
