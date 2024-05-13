const fs = require('fs');
const [n, b] = fs.readFileSync(0, 'utf-8').trim().split(' ');

let result = 0;
result = [...n].reverse().reduce((acc, cur, idx) => {
    if (isNaN(Number(cur))) {
        const num = cur.charCodeAt() - 'A'.charCodeAt() + 10;
        return acc + (b ** idx * num);
    }
    return acc + (b ** idx * cur);
}, result);

console.log(result);