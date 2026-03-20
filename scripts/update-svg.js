import fs from 'fs';

const filePath = 'public/doodles/Oval-FIX.svg';
let content = fs.readFileSync(filePath, 'utf8');

// Replace the specific fill colors with currentColor or desired classes
content = content.replace(/fill="#e6e9d3"/g, 'fill="currentColor" className="text-muted-foreground/20"');
content = content.replace(/fill="#727756"/g, 'fill="currentColor" className="text-muted-foreground"');

fs.writeFileSync(filePath, content);
console.log('SVG updated successfully');
