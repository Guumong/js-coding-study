function solution(n) {
    let count = 0;
    let half = Math.ceil(n / 2);
    let arr = [];

    if (n % 2 != 0 && n != 1) count++;
    for (i = 1; i <= half; i += 2) {
        if (n % i == 0) count++;
    }
    return count;
}

// 약수는 자기자신을 제외한, 주어진 값의 절반 이하의 숫자
// n != 짝수, 1이면, 1 이상의 홀수이므로 count+=1
// n이 i가 홀수일때 나누어 떨어지면 count++
