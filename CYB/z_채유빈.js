const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, r, c] = input.shift().split(" ").map(Number);

function solution(n, r, c) {
  let answer = 0;

  let x = 2 ** (n - 1);
  let y = 2 ** (n - 1);

  while (n > 0) {
    let temp = 2 ** (n - 2);
    let skipped = 4 ** (n - 1); // 이미 지나온 사분면

    if (r < x && c < y) {
      // 제 1사분면
      x -= temp;
      y -= temp;
    } else if (r < x && c >= y) {
      // 제 2사분면
      x -= temp;
      y += temp;
      answer += skipped;
    } else if (r >= x && c < y) {
      // 제 3사분면
      x += temp;
      y -= temp;
      answer += skipped * 2;
    } else {
      // 제 4사분면
      x += temp;
      y += temp;
      answer += skipped * 3;
    }

    n -= 1;
  }

  return answer;
}

console.log(solution(n, r, c));
