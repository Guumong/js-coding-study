const fs = require("fs");
const input = fs.readFileSync("/Users/heong-geulikkoleuleug/Desktop/백준 코드/LJH/약수,배수와 소수2/골드바흐 추측/input.txt").toString().trim().split("\n").map(Number)

const N = parseInt(input.shift(), 10);

function sieveOfEratosthenes(limit) {
    let primes = [];
    let isPrime = Array(limit + 1).fill(true);
    isPrime[0] = isPrime[1] = false; // 0과 1은 소수가 아님

    for (let number = 2; number <= Math.sqrt(limit); number++) {
        if (isPrime[number]) {
            for (let multiple = number * number; multiple <= limit; multiple += number) {
                isPrime[multiple] = false;
            }
        }
    }

  // 배열에서 true인 위치의 인덱스를 소수로 수집
    for (let i = 2; i < limit; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }

    return primes;
}


function plus_arr_optimized(primes, num) {
    let count = 0;
    let seen = new Set();

    for (let prime of primes) {
        seen.add(prime);
        if (seen.has(num - prime)) {
            count++;
        }
    }

    return count;
}
for(let i =0; i< N; i++) {
    const num = input[i];
    console.log(plus_arr_optimized(sieveOfEratosthenes(num),num))
}
