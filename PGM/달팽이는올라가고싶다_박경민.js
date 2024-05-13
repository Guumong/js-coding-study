const fs = require('fs');
let [a, b, v] = fs.readFileSync(0, 'utf-8').trim().split(' ').map(Number);

let distancePerDay = a - b;
let dayCount = Math.ceil(v / distancePerDay);
let result = (a * dayCount) - (b * (dayCount - 1));

console.log(dayCount - Math.trunc((result - v) / distancePerDay));