const fs = require("fs");
const input = fs.readFileSync("/Users/heong-geulikkoleuleug/Desktop/백준 코드/LJH/Bronze/별찍기/input.txt").toString().trim().split(" ");

const num = input[0]; // 별의 최대 너비를 결정하는 숫자. 여기서는 가운데 줄의 별 개수입니다.
let result = '';

for (let i = 1; i <= num * 2 - 1; i++) {
    // 각 줄에 대한 공백의 개수를 계산합니다.
    const spaceCount = Math.abs(num - i);
    // 각 줄에 대한 별의 개수를 계산합니다.
    const starCount = (num - spaceCount) * 2 - 1;
    // 공백을 추가합니다.
    const spaces = ' '.repeat(spaceCount);
    // 별을 추가합니다.
    const stars = '*'.repeat(starCount);
    // 완성된 줄을 결과 문자열에 추가합니다.
    result += spaces + stars + '\n';
}

console.log(result);

//1,3,5,7,9,7,5,4,3,2,1