let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
let alpha = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
let result = '';

for (let i = 0; i < input.length; i++) {
    if (alpha.indexOf(input[i]) <= 2) {
        result += alpha[alpha.indexOf(input[i]) + 26 - 3];
    } else result += alpha[alpha.indexOf(input[i]) - 3];
}

console.log(result);
