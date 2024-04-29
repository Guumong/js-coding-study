const fs = require("fs");
const input = fs.readFileSync("/Users/heong-geulikkoleuleug/Desktop/백준 코드/LJH/약수,배수와 소수2/창문 닫기/input.txt").toString().trim()

const N = parseInt(input,10);

function a(n){
    let count = 0;
    for (let i=1; i<= Math.floor(Math.sqrt(n)); i++){
            count ++;
    }
    return count;
}

console.log(a(N));