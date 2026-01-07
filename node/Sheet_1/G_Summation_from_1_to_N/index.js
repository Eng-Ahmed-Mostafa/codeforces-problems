const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();
const n = BigInt(input); // use BigInt not Number to handle large values
function summation(n) {
    return (n * (n + 1n)) / 2n; // use BigInt arithmetic 1n, 2n for literals
}
const result = summation(n);
console.log(result.toString()); // convert BigInt to string for output without 'n' suffix 