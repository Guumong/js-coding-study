const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input.shift();
const map = [];

let max = 0;
let min = 101;

let answer = 0;

input.forEach((line, index) => {
  map.push(line.split(" ").map(Number));
  min = Math.min(min, Math.min(...map[index]));
  max = Math.max(max, Math.max(...map[index]));
});

let visited = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => false)
);

const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];

function bfs(rain, x, y) {
  const queue = [];
  queue.push([x, y]);
  visited[x][y] = true;

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        nx < 0 ||
        nx >= n ||
        ny < 0 ||
        ny >= n ||
        visited[nx][ny] ||
        map[nx][ny] <= rain
      )
        continue;

      visited[nx][ny] = true;
      queue.push([nx, ny]);
    }
  }
}

function solution() {
  let answer = 0;

  // 비가 얼마나 내렸는지에 따라 모든 안전영역의 개수를 구한다.
  for (let rain = 0; rain < max; rain++) {
    let sectionCnt = 0;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        // 물에 잠기지 않았고, 아직 방문하지 않은 지점이라면 인접한 영역을 모두 방문한다.
        if (map[i][j] > rain && !visited[i][j]) {
          sectionCnt += 1;
          bfs(rain, i, j);
        }
      }
    }

    answer = Math.max(answer, sectionCnt);

    visited = Array.from({ length: n }, () =>
      Array.from({ length: n }, () => false)
    );
  }

  return answer;
}

console.log(solution());
