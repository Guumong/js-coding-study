function solution(n, s, a, b, fares) {
  const board = Array.from({ length: n + 1 }, () =>
    Array(n + 1).fill(Infinity)
  );

  // 자기 자신에 대한 최단 경로는 0으로 설정한다.
  for (let i = 1; i <= n; i++) {
    board[i][i] = 0;
  }

  // fares를 순회하며 출발 정점 - 도착 정점 - 가중치를 양방향 그래프화한다.
  fares.forEach((pos) => {
    const [from, to, dis] = pos;
    board[from][to] = dis;
    board[to][from] = dis;
  });

  // i: 경유 노드(합승 지점), j: 시작 정점, k: 도착 정점
  // 모든 노드로부터 각 노드까지의 최단 경로를 구한다.
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      for (let k = 1; k <= n; k++) {
        if (board[j][k] > board[j][i] + board[i][k])
          board[j][k] = board[j][i] + board[i][k];
      }
    }
  }

  // 합승하지 않고, 두 사람이 따로 가는 경우
  let answer = board[s][a] + board[s][b];

  // 두 사람이 따로 가는 경우와 합승하는 경우를 비교해 더 작은 값을 선택한다.
  for (let i = 1; i <= n; i++) {
    const shortest = board[s][i] + board[i][a] + board[i][b];
    answer = Math.min(answer, shortest);
  }

  return answer;
}
