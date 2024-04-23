const fs = require("fs");
const input = fs.readFileSync("/Users/heong-geulikkoleuleug/Desktop/백준 코드/LJH/집합과 맵/서로 다른 부분 문자열의 개수/input.txt").toString().trim();
const set = new Set();

for (let i = 0; i < input.length; i++) {
    for (let j = 1; j <= input.length; j++) {
        if(input.slice(i, j).length > 0) {
            set.add(input.slice(i, j));
        }
    }
}


console.log(set.size);
