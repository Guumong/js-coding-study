const fs = require("fs");
const input = fs.readFileSync("/Users/heong-geulikkoleuleug/Desktop/백준 코드/LJH/Silver/세로 읽기/input.txt").toString().trim().split("\n");

// 행렬 데이터를 숫자로 변환하여 저장
result = '';

//가장 긴 문자열 찾기
const maxlength =input.reduce((max,current)=> Math.max(max,current.length),0);

for (let i = 0; i <maxlength; i++) {// 단어 갯수만큼 반복
    for (let j = 0; j < input.length; j++) { // 단어 길이만큼 반복
        if(input[j][i]!==undefined)result += input[j][i];
    }
}
console.log(result);
