const fs = require('fs');
const path = require('path');

// Load projects and blogs data
const projectsDataPath = path.join(process.cwd(), 'src', 'data', 'projectsData.js');
const blogsDataPath = path.join(process.cwd(), 'src', 'data', 'blogsData.json');

let brokenImages = [];

function checkPath(p) {
    if (typeof p !== 'string') return;
    if (p.startsWith('http')) return; // Skip external
    
    // Remove leading slash if present
    const relativePath = p.startsWith('/') ? p.substring(1) : p;
    const fullPath = path.join(process.cwd(), 'public', relativePath);
    
    if (!fs.existsSync(fullPath)) {
        brokenImages.push(p);
    }
}

// Check projectsData.js
// Since it's an export, we'll use a regex to extract strings that look like image paths
const projectsContent = fs.readFileSync(projectsDataPath, 'utf8');
const pathRegex = /"\/images\/.*?\.(png|jpg|jpeg|webp|gif|svg)"|'\/images\/.*?\.(png|jpg|jpeg|webp|gif|svg)'/g;
let match;
while ((match = pathRegex.exec(projectsContent)) !== null) {
    const p = match[0].slice(1, -1);
    checkPath(p);
}

// Check blogsData.json
const blogsContent = JSON.parse(fs.readFileSync(blogsDataPath, 'utf8'));
blogsContent.forEach(post => {
    checkPath(post.image);
    post.content.forEach(item => {
        if (item.type === 'img') {
            checkPath(item.url);
        }
    });
});

console.log(JSON.stringify(brokenImages, null, 2));
