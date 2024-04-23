const fs = require("fs");
const input = fs.readFileSync("/Users/heong-geulikkoleuleug/Desktop/백준 코드/LJH/약수,배수와 소수2/최소 공배수/input.txt").toString().trim()

const [a,b] = input.split(" ");
function gcd(a,b) {
    while(b !== 0)
    {
        let t = b;
        b = a % b;
        a = t;
    }   
    return a;
}

console.log((a*b)/gcd(a,b));



