const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const aCode = input.charCodeAt(0);

if (aCode >= 48 && aCode <= 57) {
    console.log("IS DIGIT");
}else {
    console.log("ALPHA");
    if (aCode >= 65 && aCode <= 90) {
        console.log("IS CAPITAL");
    }else if(aCode >= 97 && aCode <= 122) {
        console.log("IS SMALL");
    }
}