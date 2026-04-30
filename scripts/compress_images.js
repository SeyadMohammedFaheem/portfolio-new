import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const directory = 'public/images/work';
const files = fs.readdirSync(directory);

async function compress() {
    for (const file of files) {
        const filePath = path.join(directory, file);
        const ext = path.extname(file).toLowerCase();
        
        if (['.png', '.jpg', '.jpeg'].includes(ext)) {
            const outPath = filePath.replace(ext, '.webp');
            
            console.log(`Compressing ${file}...`);
            try {
                await sharp(filePath)
                    .webp({ quality: 80 })
                    .toFile(outPath);
                
                // If the new file is smaller, keep it. If not, we could delete it, 
                // but usually webp is smaller.
                // For this task, we will just convert everything to webp and delete the old ones.
                if (filePath !== outPath) {
                    fs.unlinkSync(filePath);
                    console.log(`Deleted original ${file}`);
                }
            } catch (err) {
                console.error(`Error compressing ${file}:`, err);
            }
        }
    }
}

compress();
