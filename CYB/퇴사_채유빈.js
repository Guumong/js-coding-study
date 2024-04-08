const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input.shift();
const schedule = [];

// schedule의 원소 형태는 [T, P, 상담 완료 여부]이다.
input.forEach((v) => {
  schedule.push([...v.split(" ").map(Number), false]);
});

const answer = [];

function dfs(day) {
  if (day > n) {
    const payment = schedule
      .filter((v) => v[2] === true)
      .reduce((acc, cur) => acc + cur[1], 0);
    answer.push(payment);
  } else {
    // day일 상담을 하는 경우
    schedule[day - 1][2] = true;
    if (schedule[day - 1][0] > n - day + 1) schedule[day - 1][2] = false; // 만약 상담 기간이 퇴사일을 넘기게 되는 경우 상담 완료 여부를 다시 false로 되돌려준다.
    dfs(day + schedule[day - 1][0]);

    // day일 상담을 하지 않는 경우
    schedule[day - 1][2] = false;
    dfs(day + 1);
  }
}

function solution() {
  dfs(1);
  console.log(Math.max(...answer));
}

solution();
