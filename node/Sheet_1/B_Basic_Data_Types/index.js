const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();
const separated = input.split(' ');

separated.forEach(value => {
    console.log(value);
});