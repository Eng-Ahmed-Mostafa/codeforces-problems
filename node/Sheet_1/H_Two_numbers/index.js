const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();
const [a, b] = input.split(' ').map(function(x) { return parseFloat(x); });
const result = a / b;
console.log(`floor ${a} / ${b} = ${Math.floor(result)}`);
console.log(`ceil ${a} / ${b} = ${Math.ceil(result)}`);
console.log(`round ${a} / ${b} = ${Math.round(result)}`);