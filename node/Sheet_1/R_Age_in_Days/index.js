const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();
const nums = parseInt(input);
const years = Math.floor(nums / 365);
const months = Math.floor((nums % 365) / 30);
const days = (nums % 365) % 30;

console.log(`${years} years`);
console.log(`${months} months`);
console.log(`${days} days`);