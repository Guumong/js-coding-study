const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, k] = input.shift().split(" ").map(Number);
const arr = [];

input.forEach((v) => {
  arr.push(v.split(" ").map(Number));
});

const dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));

function solution(n, k, arr) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= k; j++) {
      // 넣고자 하는 물건의 무게가 남은 배낭의 용량보다 작을 때
      if (j >= arr[i - 1][0]) {
        // 물건을 넣을 때와 넣지 않을 때 가치가 더 큰 것으로 갱신한다.
        dp[i][j] = Math.max(
          dp[i - 1][j - arr[i - 1][0]] + arr[i - 1][1],
          dp[i - 1][j]
        );
      } else {
        // 넣고자 하는 물건의 무게가 배낭의 용량보다 클 때는 지금까지 구한 최대 가치 값과 같다.
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[n][k];
}

console.log(solution(n, k, arr));
