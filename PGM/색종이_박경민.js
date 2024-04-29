const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').split('\n');
const n = input.shift();

const [xPos, yPos] = [[], []];

for (let i = 0; i < n; i++) {
    const [x, y] = input[i].split(' ').map(Number);
    xPos.push(x);
    yPos.push(y);
}

const [xMin, xMax, yMin, yMax] = [Math.min(...xPos), Math.max(...xPos) + 10, Math.min(...yPos), Math.max(...yPos) + 10];
let area = (xMax - xMin) * (yMax - yMin);

for (let i = xMin; i < xMax; i++) {
    for (let j = yMin; j < yMax; j++) {
        let isExist = false;
        for (let k = 0; k < n; k++) {
            if (xPos[k] <= i && xPos[k] + 10 > i && yPos[k] <= j && yPos[k] + 10 > j) {
                isExist = true;
                break;
            }
        }
        if (!isExist) {
            area--;
        }
    }
}

console.log(area);