const fs = require("fs");
const input = fs.readFileSync("/Users/heong-geulikkoleuleug/Desktop/백준 코드/LJH/Bronze/킹, 퀸, 룩, 비숍, 나이트, 폰/input.txt").toString().trim().split(" ");

const board = [1,1,2,2,2,8];
const result = [];
for(let i=0; i<board.length; i++){
  let a = board[i] - input[i];
  result.push(a);
}

console.log(result.join(" "));