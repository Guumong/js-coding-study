const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
let arr = Array(n).fill(1).map((_, index) => index + 1); //[1,2,3,4,5]

// 각 줄을 처리하는 반복문
for (let i = 1; i <= m; i++) { // 첫 번째 줄부터 처리
    const [a, b] = input[i].split(" ").map(Number);
    const reversedPart = arr.slice(a - 1, b).reverse(); // 역순으로 만들 부분
    arr.splice(a - 1, reversedPart.length, ...reversedPart); // 역순으로 변경된 부분으로 덮어씌우기
}
const output = arr.join(" ");
console.log(output);