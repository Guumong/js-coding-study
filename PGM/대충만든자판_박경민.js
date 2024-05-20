function solution(keymap, targets) {
    const answer = targets.map(target => {
        const countArr = [...target].map(char => {
            const arr = [];

            keymap.map(element => {
                if (element.indexOf(char) !== -1) {
                    arr.push(element.indexOf(char));
                }
            })

            if (arr.length === 0) {
                return -1;
            } else {
                return Math.min(...arr) + 1;
            }
        })

        if (countArr.includes(-1)) return -1;
        return countArr.reduce((acc, cur) => acc + cur);
    })
    
    return answer;
}