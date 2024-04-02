const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

//테스트 코드의 앞에 공백이 존재할 경우 예외사항으로 두어야 한다.
input[0] === "" ? console.log(input.length - 1) : console.log(input.length);

