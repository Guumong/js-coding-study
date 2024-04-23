const fs = require("fs");
const input = fs.readFileSync("/Users/heong-geulikkoleuleug/Desktop/백준 코드/LJH/집합과 맵/숫자 카드 2/input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const N_arr = input[1].split(" ").map(Number);
const M = Number(input[2]);
const M_arr = input[3].split(" ").map(Number);

//숫자에 맞게 갯수를 mapping 
const N_map = new Map();

for(let i= 0; i<N; i++) {
    N_map.set(N_arr[i], (N_map.get(N_arr[i]) || 0) + 1);
}

const result = [];
for(let i=0; i<M;i++){
    result.push(N_map.get(M_arr[i]) == undefined ? 0 : N_map.get(M_arr[i]))
}

console.log(result.join(" "));