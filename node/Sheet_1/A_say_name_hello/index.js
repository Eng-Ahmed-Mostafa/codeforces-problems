//! Wrong codeforces
// const r = require('readline-sync');
// const name = r.question("What is your name? ");
// console.log(`Hello, ${name}`);

//? Correct codeforces
const fs = require('fs');
const name = fs.readFileSync(0, 'utf8').trim();
console.log(`Hello, ${name}`);