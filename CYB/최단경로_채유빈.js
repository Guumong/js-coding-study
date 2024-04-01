const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// MinHeap code 출처: https://velog.io/@ywc8851/%EB%B0%B1%EC%A4%80-1753-%EC%B5%9C%EB%8B%A8%EA%B2%BD%EB%A1%9C-javascript
class MinHeap {
  heapArray = [];
  constructor() {
    this.heapArray.push(null);
  }

  push(data) {
    if (this.heapArray === null) {
      this.heapArray = [];
      this.heapArray.push(null);
      this.heapArray.push(data);
    } else {
      this.heapArray.push(data);
      let inserted_idx = this.heapArray.length - 1;
      let parent_idx = parseInt(inserted_idx / 2);
      while (inserted_idx > 1) {
        if (this.heapArray[inserted_idx][1] < this.heapArray[parent_idx][1]) {
          const tmp = this.heapArray[inserted_idx];
          this.heapArray[inserted_idx] = this.heapArray[parent_idx];
          this.heapArray[parent_idx] = tmp;
          inserted_idx = parent_idx;
          parent_idx = parseInt(parent_idx / 2);
        } else {
          break;
        }
      }
    }
  }
  move_down(pop_idx) {
    const left_child = pop_idx * 2;
    const right_child = pop_idx * 2 + 1;

    if (left_child >= this.heapArray.length) {
      return false;
    } else if (right_child >= this.heapArray.length) {
      if (this.heapArray[pop_idx][1] > this.heapArray[left_child][1]) {
        return true;
      }
      return false;
    } else {
      if (this.heapArray[left_child][1] < this.heapArray[right_child][1]) {
        if (this.heapArray[pop_idx][1] > this.heapArray[left_child][1]) {
          return true;
        }
        return false;
      } else {
        if (this.heapArray[pop_idx][1] > this.heapArray[right_child][1]) {
          return true;
        }
        return false;
      }
    }
  }

  pop() {
    if (this.heapArray === null) {
      return null;
    } else {
      const return_data = this.heapArray[1];
      this.heapArray[1] = this.heapArray[this.heapArray.length - 1];
      this.heapArray.pop();
      let popped_idx = 1;
      while (this.move_down(popped_idx)) {
        const left_child = popped_idx * 2;
        const right_child = popped_idx * 2 + 1;
        if (right_child >= this.heapArray.length) {
          if (this.heapArray[popped_idx][1] > this.heapArray[left_child][1]) {
            const tmp = this.heapArray[popped_idx];
            this.heapArray[popped_idx] = this.heapArray[left_child];
            this.heapArray[left_child] = tmp;
            popped_idx = left_child;
          }
        } else {
          if (this.heapArray[left_child][1] < this.heapArray[right_child][1]) {
            if (this.heapArray[popped_idx][1] > this.heapArray[left_child][1]) {
              const tmp = this.heapArray[popped_idx];
              this.heapArray[popped_idx] = this.heapArray[left_child];
              this.heapArray[left_child] = tmp;
              popped_idx = left_child;
            }
          } else {
            if (
              this.heapArray[popped_idx][1] > this.heapArray[right_child][1]
            ) {
              const tmp = this.heapArray[popped_idx];
              this.heapArray[popped_idx] = this.heapArray[right_child];
              this.heapArray[right_child] = tmp;
              popped_idx = right_child;
            }
          }
        }
      }
      return return_data;
    }
  }
}

// 정리
const [v, e] = input.shift().split(" ").map(Number);
const k = Number(input.shift());

const graph = Array.from({ length: v + 1 }, () => []);

input.forEach((i) => {
  const [from, to, weight] = i.split(" ").map(Number);
  graph[from].push([to, weight]);
});

const dis = Array.from({ length: v + 1 }, () => Infinity);
const visited = Array.from({ length: v + 1 }, () => false);
const pq = new MinHeap();

// 풀이
function solution() {
  pq.push([k, 0]);
  dis[k] = 0; // 출발 정점의 거리는 0

  while (pq.heapArray.length > 1) {
    const [to, weight] = pq.pop();
    if (visited[to]) continue; // 이미 방문한 노드라면 건너뛴다.

    visited[to] = true; // 방문했음을 표시한다.

    for (let [nextTo, nextDis] of graph[to]) {
      if (dis[nextTo] > dis[to] + nextDis) {
        dis[nextTo] = dis[to] + nextDis;
        pq.push([nextTo, dis[nextTo]]);
      }
    }
  }

  console.log(
    dis
      .map((v) => (v === Infinity ? "INF" : v))
      .slice(1)
      .join("\n")
  );
}

solution();
