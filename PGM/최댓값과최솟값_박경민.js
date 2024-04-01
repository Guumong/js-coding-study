function solution(s) {
    let answer = '';
    let numbers = [];
    
    s = s.split(' ');
    s.forEach((value) => {
        numbers.push(Number(value));
    })

    answer = `${Math.min(...numbers)} ${Math.max(...numbers)}`;
    
    return answer;
}

solution("1 2 3 4");