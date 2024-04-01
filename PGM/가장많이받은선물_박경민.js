function solution(friends, gifts) {
    let history = [];
    for (let i = 0; i < friends.length; i++) {
        history.push(new Array(friends.length).fill(0));
    }

    let score = new Array(friends.length).fill(0);

    gifts.forEach((gift) => {
        let arr = gift.split(' ');
        let coordinate = [-1, -1];
        for (let i = 0; i < friends.length; i++) {
            if (arr[0] === friends[i]) {
                score[i]++;
                coordinate[0] = i;
            }
            if (arr[1] === friends[i]) {
                score[i]--;
                coordinate[1] = i;
            }
            if (coordinate[0] !== -1 && coordinate[1] !== -1) {
                history[coordinate[0]][coordinate[1]]++;
                break;
            }
        }
    })

    let giftCount = new Array(friends.length).fill(0);

    for (let i = 0; i < friends.length; i++) {
        for (let j = i + 1; j < friends.length; j++) {
            if (history[i][j] > history[j][i]) {
                giftCount[i]++;
            } else if (history[i][j] < history[j][i]) {
                giftCount[j]++;

            } else {
                if (score[i] > score[j]) {
                    giftCount[i]++;
                } else if (score[i] < score[j]) {
                    giftCount[j]++;
                }
            }
        }
    }

    return Math.max(...giftCount);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/258712