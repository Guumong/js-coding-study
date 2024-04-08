const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('');

let result = input.reduce((acc, cur) => acc + elapsedTime(cur), 0);

console.log(result);

function elapsedTime(char) {
    let dial = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];
    for (let i = 0; i < dial.length; i++) {
        if (dial[i].includes(char)) {
            return i + 3;
        }
    }
}