const fs = require("fs");
const input = fs.readFileSync("/Users/heong-geulikkoleuleug/Desktop/백준 코드/LJH/집합과 맵/듣보잡/input.txt").toString().trim().split("\n");

const [N,M] = input[0].split(" ").map(Number);
const N_set = new Set();

for (let i = 1; i <= N; i++) {
    N_set.add(input[i]);
}

let result = [];

for(let i = N+1; i<= N+M; i++) {
    if(N_set.has(input[i])) {
        result.push(input[i]);
    }
}
console.log(result.length+"\n"+result.sort((a,b)=> a.localeCompare(b)).join("\n"));





