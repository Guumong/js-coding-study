const fs = require('fs');
let n = Number(fs.readFileSync(0, 'utf-8').trim());
let count = 0;

for (let i = parseInt(n / 5); i >= 0; i--) {
  if ((n - i * 5) % 3 === 0) {
    count = i + ((n - i * 5) / 3);
    console.log(count);
    return;
  }
}

console.log(-1);