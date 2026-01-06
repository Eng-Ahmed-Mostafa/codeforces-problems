const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();
[a, b] = input.split(' ');
a = a.slice(-1);
b = b.slice(-1);
const result = Number(a) + Number(b);
console.log(result);    

