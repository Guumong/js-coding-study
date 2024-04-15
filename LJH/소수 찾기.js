const fs = require("fs");
const input = fs.readFileSync("/Users/heong-geulikkoleuleug/Desktop/백준 코드/LJH/약수,배수와 소수/소수 찾기/input.txt").toString().trim().split("\n");

const N = input[0];
const M = input[1].split(" ");
let count = 0;
for (let i = 0; i < M.length; i++) {
  const a = parseInt(M[i], 10);
  let arr = [];
  for (let j = 1; j <= a; j++) {
    if(Number.isInteger(a/j)){
      arr.push(j);
    }
  }
  if(arr.length == 2){
    count ++;
  }
}

console.log(count);

