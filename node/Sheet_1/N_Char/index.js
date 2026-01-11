const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

if(input === input.toUpperCase()) {
    console.log(input.toLowerCase());
} else {
    console.log(input.toUpperCase());
}

