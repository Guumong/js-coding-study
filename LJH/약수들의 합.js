const fs = require("fs");
const input = fs.readFileSync("/Users/heong-geulikkoleuleug/Desktop/백준 코드/LJH/약수,배수와 소수/약수들의 합/input.txt").toString().trim().split("\n");

for(let j = 0; j < input.length; j++){// input.length만큼 반복
  const a = parseInt(input[j], 10);
  let arr = [];
  let sum = 0;
  for (let i = 1; i < a; i++) {
      if(Number.isInteger(a/i)){
        arr.push(i);
        sum+= i;
      }
  }
  if(a == sum){
    console.log(`${a} = ${arr.join(" + ")}`);
  }
  else if (a == -1){
    break;
  }
  else if(a !== sum){
    console.log(`${a} is NOT perfect.`);
  }
}



