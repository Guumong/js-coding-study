/** case 1: 등수 = 나보다 점수 높은 사람의 수 */
function solution(score) {
    let answer = [];
    let average = score.map(element => (element[0] + element[1]) / 2);
    answer = average.map((avg) => {
        return average.filter(element => element > avg).length + 1;
    });

    return answer;
}

/** case 2: 평균 점수 기준으로 등수를 매긴 배열의 값을 원래 배열과 대조하여 같은 값의 인덱스 값 */
function solution(score) {
    let answer = [];

    let average = score.map(([engScore, mathScore]) => (engScore + mathScore) / 2);
    let sortedAvg = average.slice().sort((a, b) => b - a);
    answer = average.map(avg => sortedAvg.indexOf(avg) + 1);

    return answer;
}