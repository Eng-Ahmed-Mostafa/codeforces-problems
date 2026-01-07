const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();
const [a, b] = input.split(' ').map(Number);
const result = Math.max(a, b);
if (result <= a) {
    console.log("Yes");
} else {
    console.log("No");
}