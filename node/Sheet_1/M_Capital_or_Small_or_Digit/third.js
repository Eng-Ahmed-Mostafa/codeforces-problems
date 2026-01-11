const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

if (!isNaN(input)) {
    console.log("IS DIGIT");
}else {
    console.log("ALPHA");
    if (input === input.toUpperCase()) {
        console.log("IS CAPITAL");
    } else { 
        console.log("IS SMALL");
    }
} 