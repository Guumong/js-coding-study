const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const arr = Array.from({ length: n + 1 }, () =>
  Array.from({ length: n + 1 }, () => 0)
);

for (let i = 1; i <= n; i += 1) {
  const row = input.shift().split(" ").map(Number);

  for (let j = 1; j <= n; j += 1) {
    arr[i][j] = row[j - 1];
  }
}

const section = [];

for (let i = 0; i < m; i += 1) {
  section.push(input[i].split(" ").map(Number));
}

function solution(n, m, arr, section) {
  const answer = [];

  for (let x = 1; x <= n; x += 1) {
    for (let y = 1; y <= n; y += 1) {
      arr[x][y] += arr[x - 1][y] + arr[x][y - 1] - arr[x - 1][y - 1];
    }
  }

  section.forEach(([x1, y1, x2, y2]) => {
    answer.push(
      arr[x2][y2] - arr[x1 - 1][y2] - arr[x2][y1 - 1] + arr[x1 - 1][y1 - 1]
    );
  });

  return answer.join("\n");
}

console.log(solution(n, m, arr, section));
