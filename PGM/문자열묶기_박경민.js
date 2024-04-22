function solution(strArr) {
    const counter = new Map();  // 길이를 키로, 해당 길이의 문자열 수를 값으로 저장할 Map 객체 생성
    for (const str of strArr) {  // 배열의 모든 문자열을 순회
      counter.set(str.length, (counter.get(str.length) || 0) + 1);  // 각 문자열의 길이를 키로 하여 빈도 수 업데이트
    }
    return Math.max(...counter.values());  // Map의 값 중 최대값 반환
  }
  