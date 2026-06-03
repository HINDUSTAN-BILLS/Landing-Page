const fs = require('fs');
const lines = fs.readFileSync('app/page.tsx', 'utf8').split('\n');
let opens = 0;
let closes = 0;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    opens += (line.match(/<div/g) || []).length;
    closes += (line.match(/<\/div>/g) || []).length;
}

console.log(`opens: ${opens}, closes: ${closes}`);
