const fs = require("fs");
const input = fs.readFileSync("/Users/heong-geulikkoleuleug/Desktop/백준 코드/LJH/약수,배수와 소수2/분수 합/input.txt").toString().trim().split("\n")

const [a,b] = input[0].split(" ").map(Number);
const [c,d] = input[1].split(" ").map(Number);
function gcd(a,b) {
    while(b !== 0)
    {
        let t = b;
        b = a % b;
        a = t;
    }   
    return a;
}
const x = (a*d) + (b*c);
const y = b*d

console.log(x/gcd(x,y),y/gcd(x,y))


