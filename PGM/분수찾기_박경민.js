const fs = require('fs');
let x = Number(fs.readFileSync(0, 'utf-8').trim());
let count = 0;

while (x - count > 0) {
    count++;
    x -= count;
}
count++;

if (x === 0) {
    if (count % 2) {
        console.log((count - 1) + '/' + 1);
    } else {
        console.log(1 + '/' + (count - 1));
    }
} else {
    let curCount = 0;
    for (let i = 1; i <= x; i++) {
        if (count % 2) {
            for (let j = 1; j <= count; j++) {
                curCount++;
                if (curCount === x) {
                    console.log(count - j + 1 + '/' + j);
                }
            }
        } else {
            for (let j = count; j >= 1; j--) {
                curCount++;
                if (curCount === x) {
                    console.log(count - j + 1 + '/' + j);
                }
            }
        }
    }
}