const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const aCode = input.charCodeAt(0);

if (aCode < 65) {
    console.log("IS DIGIT");
}else {
    console.log("ALPHA");
    if(aCode < 97) {
        console.log("IS CAPITAL");
    }else {
        console.log("IS SMALL");
    }
}