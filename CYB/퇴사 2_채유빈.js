const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input.shift();
const arr = [];

input.forEach((v) => {
  arr.push(v.split(" ").map(Number));
});

function solution(arr) {
  const dp = Array.from({ length: n + 1 }, () => 0);
  let max = 0;

  for (let i = 0; i < n; i += 1) {
    // (i+1)일 상담을 진행하기 전에, 현재까지 진행한 상담 이익의 최댓값을 확인한다.
    max = Math.max(max, dp[i]);

    const [day, pay] = arr[i];
    // (i+1)일 째 상담을 진행하면, (i + day + 1)일 째의 이익이 늘어나게 된다.
    if (i + day <= n) dp[i + day] = Math.max(dp[i + day], max + pay);
  }

  return Math.max(...dp);
}

console.log(solution(arr));
