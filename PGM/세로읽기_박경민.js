const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
const strLength = input.map(str => str.length);
const maxLength = Math.max(...strLength);

let result = '';

for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < input.length; j++) {
        if (input[j][i] !== undefined) {
            result += input[j][i];
        }
    }
}

console.log(result);