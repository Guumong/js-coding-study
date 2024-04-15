const fs = require("fs");
const input = fs.readFileSync("/Users/heong-geulikkoleuleug/Desktop/백준 코드/LJH/Silver/분수 찾기/input.txt").toString().trim().split(" ");

// 입력 값을 정수로 변환
let X = parseInt(input[0], 10);

let num = 0;
let count = 0;
let sum = 0;

while (sum < X) {
    num += 1;
    sum += num;
    count++;
}

const A = sum - X;

const result = count%2 ==0 ?`${count - A}/${1 + A}` : `${1+A}/${count-A}`;
console.log(result);
