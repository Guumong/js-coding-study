function solution(k, tangerine) {
    var count = 0;

    const sizeObject = tangerine.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});

    let sizeArr = Object.values(sizeObject).sort((a, b) => b - a);

    for (i = 0; i < sizeArr.length; i++) {
        k = k - sizeArr[i];
        count++;
        if (k <= 0) break;
    }

    return count;
}

// 귤 크기 순으로 객체에 저장
// sizeArr에 내림차순 나열
// 반복문을 돌면서, K개에서 sizeArr의 첫 요소부터 빼고
// 귤의 종류 개수를 카운트++
