const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 정리
const n = +input.shift();

const picture = [];

input.forEach((line) => {
  picture.push(line.split(""));
});

let visited = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => false)
);

const queue = [];
const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];
let noneBlindness = 0;
let blindness = 0;

function bfs(cx, cy) {
  queue.push([cx, cy, picture[cx][cy]]);
  visited[cx][cy] = true; // 방문 체크

  if (picture[cx][cy] === "R") {
    picture[cx][cy] = "G";
  }

  while (queue.length) {
    const [x, y, color] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < n &&
        picture[nx][ny] === color &&
        !visited[nx][ny]
      ) {
        queue.push([nx, ny, color]);
        visited[nx][ny] = true;

        // 'R'은 'G'로 바꿔둔다.
        if (picture[nx][ny] === "R") {
          picture[nx][ny] = "G";
        }
      }
    }
  }
}

function solution() {
  // 적록색약 X
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 새로운 구역 발견
      if (!visited[i][j]) {
        noneBlindness += 1;
        bfs(i, j);
      }
    }
  }

  // visited 배열을 모두 false로 다시 초기화
  visited = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => false)
  );

  // 적록색약 O
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 새로운 구역 발견
      if (!visited[i][j]) {
        blindness += 1;
        bfs(i, j);
      }
    }
  }

  return `${noneBlindness} ${blindness}`;
}

console.log(solution());
