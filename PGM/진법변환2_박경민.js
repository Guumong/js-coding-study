const fs = require('fs');
let [n, b] = fs.readFileSync(0, 'utf-8').trim().split(' ');
let str = '';

while (n >= 1) {
    if (n % b < 10) {
        str += n % b;
    } else {
        str += String.fromCharCode(n % b + 'A'.charCodeAt() - 10);
    }
    n = Math.floor(n / b);
}

console.log(Array.from(str).reverse().join(''));