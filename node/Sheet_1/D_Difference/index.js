const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();
[a, b, c, d] = input.split(' ').map(Number);
console.log(`Difference = ${(a * b) - (c * d)}`);