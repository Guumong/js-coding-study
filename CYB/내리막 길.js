const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [m, n] = input.shift().split(" ").map(Number);
const arr = [];
input.forEach((row) => arr.push(row.split(" ").map(Number)));

const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];

const dp = Array.from({ length: m }, () => Array.from({ length: n }, () => -1));

function dfs(x, y) {
  // 이미 방문했던 곳이라면 다시 탐색을 진행할 필요가 없다. 저장되어 있는 값을 리턴한다.
  if (dp[x][y] !== -1) return dp[x][y];

  // 마지막 노드까지 탐색을 진행했을 경우 종료값 1을 리턴해준다. (도착점 -> 도착점 경우의 수는 1)
  if (x === m - 1 && y === n - 1) {
    return 1;
  }

  let count = 0;

  // 상하좌우 탐색을 진행한다.
  for (let i = 0; i < 4; i += 1) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    // 지도 인덱스 범위를 넘어서면 건너뛴다.
    if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;

    // 내리막길일 때만 그 값을 더한다.
    if (arr[x][y] > arr[nx][ny]) count += dfs(nx, ny);
  }

  dp[x][y] = count;
  return count;
}

console.log(dfs(0, 0));
