function solution(a, b, c, d) {
    let answer = 0;
    let arr = new Array(6).fill(0);

    let diceScales = [a, b, c, d];
    let p, q, r;

    diceScales.forEach((value) => {
        arr[value - 1] += 1;
    });

    if (arr.includes(4)) {
        answer = 1111 * a;
    } else if (arr.includes(3)) {
        p = arr.indexOf(3) + 1;
        q = arr.indexOf(1) + 1;

        answer = (10 * p + q) ** 2;
    } else if (arr.includes(2)) {
        if (arr.includes(1)) {
            q = arr.indexOf(1) + 1;
            r = arr.lastIndexOf(1) + 1;

            answer = q * r;
        } else {
            p = arr.indexOf(2) + 1;
            q = arr.lastIndexOf(2) + 1;

            answer = (p + q) * Math.abs(p - q);
        }
    } else {
        answer = Math.min(...diceScales);
    }

    return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181916