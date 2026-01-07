const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();
const [a, b] = input.split(' ').map(function(x) { return parseInt(x); });
const max = Math.max(a, b);
const min = Math.min(a, b);
if (max % min === 0) {
    console.log("Multiples");
} else {
    console.log("No Multiples");
}