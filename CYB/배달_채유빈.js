function solution(N, road, K) {
  const graph = Array.from({ length: N + 1 }, () => []);
  const dist = Array(N + 1).fill(Infinity);

  road.forEach((value) => {
    let [start, end, cost] = value;
    graph[start].push({ to: end, dist: cost });
    graph[end].push({ to: start, dist: cost });
  });

  const queue = [{ to: 1, dist: 0 }];
  dist[1] = 0;

  while (queue.length) {
    const { to } = queue.pop();

    graph[to].forEach((next) => {
      if (dist[next.to] > dist[to] + next.dist) {
        dist[next.to] = dist[to] + next.dist;
        // 최단 경로가 되는 노드는 큐에 추가
        queue.push(next);
      }
    });
  }

  const answer = dist.filter((v) => v <= K).length;
  return answer;
}
