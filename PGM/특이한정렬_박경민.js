function solution(numlist, n) {
    return numlist
        .map(num => ({ value: num, diff: Math.abs(num - n) }))
        .sort((a, b) => {
            if (a.diff === b.diff) {
                return b.value - a.value;  // 같은 절대값일 경우 큰 숫자를 먼저 정렬
            }
            return a.diff - b.diff;      // 절대값이 작은 순서로 정렬
        })
        .map(item => item.value);
}
