function solution(board) {
    const n = board.length;
    const directions = [
        [-1, -1], [-1, 0], [-1, 1], 
        [0, -1], [0, 0], [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];
    const dangerArea = Array.from({ length: n }, () => Array(n).fill(false));

    // 지뢰 주변을 위험지역으로 표시
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) {
                directions.forEach(([dx, dy]) => {
                    const r = i + dx, c = j + dy;
                    if (r >= 0 && r < n && c >= 0 && c < n) {
                        dangerArea[r][c] = true;
                    }
                });
            }
        }
    }

    // 안전한 영역의 개수 계산
    let safeCount = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (!dangerArea[i][j]) {
                safeCount++;
            }
        }
    }

    return safeCount;
}
