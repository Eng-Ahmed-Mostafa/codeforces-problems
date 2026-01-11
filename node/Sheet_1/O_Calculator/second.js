const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let signal = '';
for(let item of input[0]) {
    if(isNaN(parseInt(item))) {
        signal = item;
    }
}

const [A, B] = input[0].split(signal).map(Number);

switch(signal) {    
    case '+': {
        console.log(A + B);
        break;
    }
    case '-': {
        console.log(A - B);
        break;
    }
    case '*': {
        console.log(A * B);
        break;
    }
    case '/': {
        console.log(Math.floor(A / B));
        break;
    }
}