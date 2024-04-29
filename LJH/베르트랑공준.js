const fs = require("fs");
const input = fs.readFileSync("/Users/heong-geulikkoleuleug/Desktop/백준 코드/LJH/약수,배수와 소수2/베르트랑 공준/input.txt").toString().trim().split("\n").map(Number);


function Prime_numbers(n) {
    if(n <= 1) return false;
    if(n <= 3) return true;
    if(n % 2 === 0 || n % 3 === 0) return false;
    let i = 5;
    while(i * i <= n) {
        if(n % i === 0 || n % (i + 2) === 0) return false;
        i = i + 6;
    }
    return true;
}
for(let i =0; i < input.length;i++){
    let count = 0;
    for(let j = input[i]+1; j <= input[i]*2; j++){
        if(Prime_numbers(j) === true){
            count ++;
        }
    }
    if(input[i] === 0){
        break;
    }
    console.log(count);
}