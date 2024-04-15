const fs = require("fs");
const input = fs.readFileSync("/Users/heong-geulikkoleuleug/Desktop/백준 코드/LJH/기하: 직사각형과 삼각형/직사각형에서 탈출/input.txt").toString().trim().split(" ");

const [x,y,w,h] = input.map(Number);

//x,y 좌표에서 (0,0,w,h)인 직사각형에 대해 최소거리 길이

console.log(Math.min(x,y,w-x,h-y));






