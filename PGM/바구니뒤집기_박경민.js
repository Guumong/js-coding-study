const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const n = Number(input.shift().split(' ')[0]);
let baskets = Array.from({ length: n }, (v, i) => i + 1);

input.forEach(element => {
    let [i, j] = element.split(' ').map(Number);
    if (i !== j) {
        i -= 1;
    
        let temp;
        temp = baskets.slice(i, j);
        temp = temp.reverse();
        baskets.splice(i, j - i, temp);
        baskets = baskets.flat();
    }
})

console.log(baskets.join(' '));