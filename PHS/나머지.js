const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map((item) => Number(item));

let arr = new Array(input.length);
let answer = [];
for (let i in input) {
    arr[i] = input[i] % 42;
}

let same = true;

for (let i = 0; i < arr.length; i++) {
    for (let i in arr) {
        if (arr[i] !== 0) {
            same = false;
            break;
        }
    }
    if (same == true) {
        answer = 1;
        break;
    }
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            answer.push(arr[i]);
        }
    }
}

if (answer == 1) console.log(1);
else console.log(arr.length - answer.length);
