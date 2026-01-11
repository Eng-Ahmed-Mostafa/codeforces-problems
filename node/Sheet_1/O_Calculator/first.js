const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const [A, B] = input[0].split(/[\+\-\*\/]/).map(Number);
const signal = input[0].match(/[\+\-\*\/]/)[0];

let result;
if (signal === '+') {
    result = A + B;
} else if (signal === '-') {
    result = A - B;
} else if (signal === '*') {
    result = A * B;
} else if (signal === '/') {
    result = Math.floor(A / B);
}

console.log(result);