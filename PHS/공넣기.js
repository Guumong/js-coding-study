const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[n, m], ...input] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map((item) => item.split(' ').map(Number)); // 구조 분해 할당

let basket = Array(n).fill('0'); //0으로 채워진 바구니
for (let [a, b, c] of input) {
    for (let i = a - 1; i < b; i++) {
        basket[i] = c;
    }
}

console.log(basket.join(' '));
