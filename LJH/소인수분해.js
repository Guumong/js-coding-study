const fs = require("fs");
const input = fs.readFileSync("/Users/heong-geulikkoleuleug/Desktop/백준 코드/LJH/약수,배수와 소수/소인수분해/input.txt").toString().trim().split(" ");
let arr =[];

//소인수분해 약수 찾기
let a = input[0];
// 2부터 시작하여 n의 제곱근까지의 모든 수에 대해 나누어 떨어지는지 확인
for (let divisor = 2; divisor * divisor <= a; divisor++) {
  while (a % divisor == 0) {
    arr.push(divisor);
    a /= divisor;
  }
}

if (a > 1) {
  arr.push(a);
}


console.log(arr.join('\n'));