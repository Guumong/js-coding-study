function solution(absolutes, signs) {
    let sign = 0;
    let result = 0;
    absolutes.forEach((ele) => {
        if (signs[sign] == false) ele = ele * -1;
        result += ele;
        sign++;
    });

    return result;
}

// absolutes속 숫자와 signs의 부호의 인덱스 번호를 맞춰, signs[idx]이 false이면 -1을 곱한다. 그리고 값을 계속 더해서 최종값을 반환한다.
