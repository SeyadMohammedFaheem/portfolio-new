/**
 * convert-gifs.mjs
 * Converts GIF files to animated WebP using sharp.
 * Usage: node scripts/convert-gifs.mjs
 */

import sharp from 'sharp';
import { stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PUBLIC = path.join(ROOT, 'public');

const gifs = [
  path.join(PUBLIC, 'images', 'video-editing.gif'),
  path.join(PUBLIC, 'images', 'video-editing2.gif'),
];

for (const gifPath of gifs) {
  const name = path.basename(gifPath, '.gif');
  const outPath = path.join(path.dirname(gifPath), `${name}.webp`);

  console.log(`\n🔄 Converting ${name}.gif → ${name}.webp ...`);

  const origStat = await stat(gifPath);
  console.log(`   Original: ${Math.round(origStat.size / 1024)} KB`);

  await sharp(gifPath, { animated: true })
    .webp({ quality: 70, effort: 4 })
    .toFile(outPath);

  const newStat = await stat(outPath);
  const saved = Math.round(((origStat.size - newStat.size) / origStat.size) * 100);
  console.log(`   WebP:     ${Math.round(newStat.size / 1024)} KB (−${saved}%)`);
}

console.log('\n✅ Done! GIF → animated WebP conversion complete.');
