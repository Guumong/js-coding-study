const fs = require("fs");
const input = fs.readFileSync("/Users/heong-geulikkoleuleug/Desktop/백준 코드/LJH/Bronze/그룹 단어 체커/input.txt").toString().trim().split("\n");

const num = Number(input.shift()); // 첫 번째 줄을 숫자로 변환 후 제거
let count = 0;

for (let i = 0; i < num; i++) {
    const word = input[i];
    let isWord = true;
    const seen = new Set();

    for (let j = 0; j < word.length; j++) {
        // 현재 문자가 이미 등장한 적이 있지만, 연속된 문자가 아닌 경우
        if (seen.has(word[j]) && word[j] !== word[j - 1]) {
            isWord = false;
            break;
        }
        seen.add(word[j]); // 현재 문자를 seen 집합에 추가
    }
    // 단어가 그룹 단어인 경우 카운트 증가
    if (isWord) {
        count++;
    }
}

console.log(count);
