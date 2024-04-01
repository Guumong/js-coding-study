const fs = require("fs");
const input = fs.readFileSync("/Users/heong-geulikkoleuleug/Desktop/백준 코드/BOJ/Bronze/다이얼/input.txt").toString().trim().split("");
// 배열로 다이얼 번호에 해당하는 문자를 저장
const arr = [' ', 'ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ', '']

sum = 0;
//arr배열을 순회하면서 배열 내부에
for(let i = 0; i < input.length; i++){
    for(let j = 0; j < arr.length; j++){
        if(arr[j].includes(input[i])){
            sum = sum + j + 2;
            break;
        }
    }
}
console.log(sum);
//