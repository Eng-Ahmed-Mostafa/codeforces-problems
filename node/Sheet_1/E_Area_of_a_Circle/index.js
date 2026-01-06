const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();
const radius = parseFloat(input);
const pi = 3.141592653;
const area = pi * radius * radius;
console.log(`${area.toFixed(9)}`);
