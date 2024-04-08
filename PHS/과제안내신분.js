const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map((item) => +item);

let answer = [];
input = input.sort(function (a, b) {
    return a - b;
});

for (let i = 1; i <= input.length; i++) {
    if (input.includes(i)) continue;
    answer.push(i);
}

console.log(answer.join('\n'));
