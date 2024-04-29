const fs = require("fs");
const input = fs.readFileSync("/Users/heong-geulikkoleuleug/Desktop/백준 코드/LJH/약수,배수와 소수2/다음 소수/input.txt").toString().trim().split("\n").map(Number)

const N = parseInt(input.shift(), 10);

function isPrime(n) {
    if (n <= 1) return false; // 1 이하의 경우 소수가 아님
    if (n <= 3) return true;  // 2와 3은 소수
    if (n % 2 === 0 || n % 3 === 0) return false; // 2와 3으로 나누어 떨어지는 경우 소수가 아님
    let i = 5;
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

let arr = [];
for (let i = 0; i < N; i++) {
    while (!isPrime(input[i])) {
        input[i]++;
    }
    arr.push(input[i]);
}

console.log(arr.join("\n"))