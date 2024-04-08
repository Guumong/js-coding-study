const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let numbers = input.map(Number);
let modCount = new Set();

numbers.forEach(x => modCount.add(x % 42));

console.log(modCount.size);