const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [m, n] = input.shift().split(" ").map(Number);

function solution(m, n) {
  const isPrime = Array.from({ length: n + 1 }, () => 0);
  const primeNumber = [];

  for (let i = 2; i <= n; i += 1) {
    if (isPrime[i] == 0) {
      primeNumber.push(i);

      for (let j = i; j <= n; j += i) {
        isPrime[j] = 1;
      }
    }
  }

  return primeNumber.filter((v) => v >= m).join("\n");
}

console.log(solution(m, n));
