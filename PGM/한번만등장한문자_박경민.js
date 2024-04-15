function solution(s) {
    let answer = [];
    let sorted_s = s.split('').sort();
    let sequence = 0;

    sorted_s.forEach((element, index) => {
        if (index > 0) {
            if (element === sorted_s[index - 1]) {
                sequence++;
            } else if (sequence === 0) {
                answer.push(sorted_s[index - 1]);
            } else {
                sequence = 0;
            }
        }
    })
    if (sequence === 0) {
        answer.push(sorted_s[sorted_s.length - 1]);
    }
    answer = answer.join('');
    
    return answer;
}