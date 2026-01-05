const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();
const separated = input.split(' ');
console.log(`${separated[0]} + ${separated[1]} = ${Number(separated[0]) + Number(separated[1])}`);
console.log(`${separated[0]} * ${separated[1]} = ${Number(separated[0]) * Number(separated[1])}`);
console.log(`${separated[0]} - ${separated[1]} = ${Number(separated[0]) - Number(separated[1])}`);