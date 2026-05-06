import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const images = [
    'public/images/work/giftease.png',
    'public/images/scentropolis.png',
    'public/images/design-tokens.png',
    'public/images/design-system-2.png',
    'public/images/work/poster.jpg',
    'public/images/google-ads-banner.png',
    'public/images/pickcel_collage.jpg',
    'public/images/octalume.png',
    'public/images/launchkit.png'
];

async function convert() {
    for (const img of images) {
        const ext = path.extname(img);
        const output = img.replace(ext, '.webp');
        
        if (fs.existsSync(img)) {
            console.log(`Converting ${img} to ${output}...`);
            await sharp(img)
                .webp({ quality: 80 })
                .toFile(output);
        } else {
            console.warn(`File not found: ${img}`);
        }
    }
    console.log('✅ Conversion complete!');
}

convert().catch(console.error);
