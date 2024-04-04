const fs = require("fs");
const input = fs.readFileSync("/Users/heong-geulikkoleuleug/Desktop/백준 코드/LJH/Bronze/단어 공부/input.txt").toString().trim().split(" ");

const frequency = {};

// 각 알파벳의 빈도 계산
for (const char of input[0].toUpperCase()) { // 대소문자 구분 없이 처리
  if (char >= 'A' && char <= 'Z') {
    frequency[char] = (frequency[char] || 0) + 1;
  }
}

// 최대 빈도수 찾기
let maxFrequency = 0;
for (const char in frequency) {
  if (frequency[char] > maxFrequency) {
    maxFrequency = frequency[char];
  }
}

// 최대 빈도수를 가진 알파벳 찾기
const mostFrequentChars = [];
for (const char in frequency) {
  if (frequency[char] === maxFrequency) {
    mostFrequentChars.push(char);
  }
}

console.log(mostFrequentChars.length <=1 ? mostFrequentChars.join(', ') : "?");