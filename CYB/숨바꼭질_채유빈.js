const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

// 정리
const [n, k] = input.map(Number);
const visit = Array.from({ length: 100001 }, () => 0);

// 풀이
function bfs() {
  const queue = [];
  queue.push([n, 0]);
  visit[n] = 1;

  while (queue.length) {
    const [cur, time] = queue.shift();

    if (cur === k) {
      return time;
    }

    for (let next of [cur - 1, cur + 1, cur * 2]) {
      if (next >= 0 && next <= 100000 && visit[next] === 0) {
        visit[next] = 1;
        queue.push([next, time + 1]);
      }
    }
  }
}

function solution() {
  console.log(bfs());
}

solution();
