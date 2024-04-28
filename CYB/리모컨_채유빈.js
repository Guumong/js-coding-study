const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input.shift();
const m = +input.shift();
let brokenNumbers = [];
if (m > 0) brokenNumbers = [...input.shift().split(" ").map(Number)];

function solution(n, m, brokenNumbers) {
  if (n === 100) return 0;
  if (m === 0) return Math.min(n.toString().length, Math.abs(100 - n));

  let answer = Math.abs(100 - n); // 100번에서 +, -버튼으로 이동한 경우

  // 0~999999번 입력 후 +, - 버튼으로 이동하는 경우
  for (let i = 0; i < 1000000; i += 1) {
    const strArr = i.toString().split("").map(Number);
    let isValid = true;

    // 입력하려는 번호 중 고장난 게 있으면 다음 숫자로 넘어간다.
    for (let j = 0; j < strArr.length; j += 1) {
      if (brokenNumbers.includes(strArr[j])) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      answer = Math.min(answer, Math.abs(i - n) + strArr.length);
    }
  }

  return answer;
}

console.log(solution(n, m, brokenNumbers));
