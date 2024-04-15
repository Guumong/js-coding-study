function solution(a, b) {
    let answer = 1;
    let greatest_common_divisor;
    
    // a와 b의 최대공약수 구하기
    for (let i = 1; i <= b / 2; i++) {
        if (a % i === 0 && b % i === 0) {
            greatest_common_divisor = i;
        }
    }

    // 분모를 최대공약수로 약분
    b /= greatest_common_divisor;

    // 분모의 소인수가 2와 5만 존재하는지 확인하기
    for (let i = 2; i <= b; i++) {
        if (b % i === 0 && isPrime(i)) {
            if (i !== 2 && i !== 5) {
                return 2;
            }
        }
    }
    
    return answer;
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}