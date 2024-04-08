function solution(arr) {
  var answer = [arr[0]];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

// != 는 값이 같지 않을 때 true를 반환하고
// !== 는 값과 타입이 모두 같지 않을 때 true를 반환함
// 코드의 안정성을 높이기 위해 엄격 비교를 권장
