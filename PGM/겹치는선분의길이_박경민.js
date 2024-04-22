function solution(lines) {
    const line = new Array(200).fill(0);

    // 선분의 시작과 끝에 대한 표시를 한 번에 처리
    lines.forEach(([a, b]) => {
        line[a + 100]++;   // 시작점에서 카운트 증가
        if (b + 100 < 200) line[b + 100]--;  // 끝점에서 카운트 감소
    });

    // 누적 합을 계산하여 겹치는 구간을 구함
    let currentCoverage = 0;
    let overlapLength = 0;
    for (let i = 0; i < 200; i++) {
        currentCoverage += line[i];
        if (currentCoverage > 1) {
            overlapLength++;  // 겹치는 부분 카운트
        }
    }

    return overlapLength;
}
