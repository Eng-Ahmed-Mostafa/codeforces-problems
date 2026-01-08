const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
const [a1, b1] = input[0].split(/\s+/);
const [a2, b2] = input[1].split(/\s+/);
if (b1 === b2) {
    console.log(`ARE Brothers`);
} else {
    console.log(`NOT`);
}