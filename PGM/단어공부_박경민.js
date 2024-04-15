const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().toUpperCase().split('');

const charObj = new Object();
const charSet = new Set(input);

charSet.forEach((element) => {
    charObj[element] = 0;
});

input.forEach((element) => {
    charObj[element] += 1;
});

let max = 0;
let result = '';

for (const [key, value] of Object.entries(charObj)) {
    if (value > max) {
        max = value;
        result = key;
    } else if (value === max) {
        result = '?';
    }
}

console.log(result);