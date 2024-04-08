const fs = require("fs");
const input = fs.readFileSync("/Users/heong-geulikkoleuleug/Desktop/백준 코드/LJH/Silver/너의 평점은/input.txt").toString().trim().split("\n");
//이수 학점
let count = 0;
// 누적합
let multiple = 0;

const gradeMapping = {
    'A+' : 4.5,
    'A0' : 4.0,
    'B+' : 3.5,
    'B0' : 3.0,
    'C+' : 2.5,
    'C0' : 2.0,
    'D+' : 1.5,
    'D0' : 1.0,
    'F' : 0.0,
    'P' : 0
}


// 학점과 등급의 곱을 누적합 ex)ObjectOrientedProgramming1 3.0 A+
for(let i = 0; i < input.length; i++){
    const [a,b,c] = input[i].split(" ");
    if(c!='P'){
        multiple += Number(b) * gradeMapping[c];
        count += Number(b);
    }
}



//전공과목별 합을 학점의 총합으로 나눈 총합
console.log((multiple / count).toFixed(6));