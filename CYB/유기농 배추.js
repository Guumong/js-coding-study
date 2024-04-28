const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const t = +input.shift();
const testCase = [];

for (let i = 0; i < t; i += 1) {
  const [m, n, k] = input.shift().split(" ").map(Number);

  const map = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => 0)
  );

  for (let j = 0; j < k; j += 1) {
    const [x, y] = input.shift().split(" ").map(Number);
    map[x][y] = 1;
  }

  testCase.push(map);
}

function solution(testCase) {
  const answer = [];

  testCase.forEach((map) => {
    const currentMap = [...map];
    const m = map.length;
    const n = map[0].length;
    let count = 0;

    for (let i = 0; i < m; i += 1) {
      for (let j = 0; j < n; j += 1) {
        if (currentMap[i][j] === 1) {
          // 배추들이 모여있는 곳을 발견했으므로 카운트를 증가시킨다.
          count += 1;

          const dx = [-1, 0, 1, 0];
          const dy = [0, -1, 0, 1];

          const queue = [[i, j]];

          while (queue.length > 0) {
            const [x, y] = queue.shift();

            for (let i = 0; i < 4; i += 1) {
              const nx = x + dx[i];
              const ny = y + dy[i];

              // 배추밭 범위를 넘어서면 continue
              if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;

              // 상하좌우로 인접한 배추가 있다면 0으로 바꿔주고 큐에 넣어준다.
              if (currentMap[nx][ny] === 1) {
                currentMap[nx][ny] = 0;
                queue.push([nx, ny]);
              }
            }
          }
        }
      }
    }
    answer.push(count);
  });

  return answer.join("\n");
}

console.log(solution(testCase));
