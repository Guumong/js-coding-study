const fs = require("fs");
const input = fs.readFileSync("/Users/heong-geulikkoleuleug/Desktop/백준 코드/LJH/약수,배수와 소수2/소수 구하기/input.txt").toString().trim()

const [N,M] = input.split(" ").map(Number)

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
for (let i = N; i <= M; i++) {
    if (isPrime(i)) {
        arr.push(i);
    }
}

console.log(arr.join("\n"))