const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();
const [a, b, c] = input.split(' ').map(Number);
const max = Math.max(a, b, c);
const min = Math.min(a, b, c);
console.log(`${min} ${max}`);