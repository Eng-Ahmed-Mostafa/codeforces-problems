const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();
const first_digit = parseInt(input[0]);
if (first_digit % 2 === 0) {
    console.log("EVEN");
} else { 
    console.log("ODD");
}