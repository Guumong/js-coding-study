function solution(park, routes) {
    let currentCoord = [0, 0];
    let parkMap = [];
    let [h, w] = [park.length, park[0].length];

    // 지도 배열 생성
    park.map(value => {
        parkMap.push(value.split(''));
    })

    // 시작 지점 찾기
    parkMap.map((value, row) => {
        let column = value.indexOf('S');
        if (column !== -1) {
            currentCoord = [row, column];
        }
    })

    // 조건에 따라 이동하기
    routes.map((route) => {
        let op = route[0];
        let n = Number(route[2]);
        let isGo = true;
        
        if (op === 'N') {
            if (currentCoord[0] - n < 0) {
                isGo = false;
            } else {
                for (let i = 1; i <= n; i++) {
                    if (parkMap[currentCoord[0] - i][currentCoord[1]] === 'X') {
                        isGo = false;
                        break;
                    }
                }
            }
            if (isGo) {
                currentCoord[0] -= n;
            }
        }
        if (op === 'S') {
            if (currentCoord[0] + n > h - 1) {
                isGo = false;
            } else {
                for (let i = 1; i <= n; i++) {
                    if (parkMap[currentCoord[0] + i][currentCoord[1]] === 'X') {
                        isGo = false;
                        break;
                    }
                }
            }
            if (isGo) {
                currentCoord[0] += n;
            }
        }
        if (op === 'W') {
            if (currentCoord[1] - n < 0) {
                isGo = false;
            } else {
                for (let i = 1; i <= n; i++) {
                    if (parkMap[currentCoord[0]][currentCoord[1] - i] === 'X') {
                        isGo = false;
                        break;
                    }
                }
            }
            if (isGo) {
                currentCoord[1] -= n;
            }
        }
        if (op === 'E') {
            if (currentCoord[1] + n > w - 1) {
                isGo = false;
            } else {
                for (let i = 1; i <= n; i++) {
                    if (parkMap[currentCoord[0]][currentCoord[1] + i] === 'X') {
                        isGo = false;
                        break;
                    }
                }
            }
            if (isGo) {
                currentCoord[1] += n;
            }
        }
    })

    return currentCoord;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/172928