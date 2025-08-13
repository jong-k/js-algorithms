// 백준 1916 최소비용 구하기
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  input = input.map((line) => line.split(" ").map(Number));
  const [vNum] = input[0];
  const [eNum] = input[1];
  const [start, end] = input[eNum + 2];
  const adjacentList = {};
  for (let i = 1; i <= vNum; i++) adjacentList[i] = [];
  for (let i = 2; i < eNum + 2; i++) {
    const [v1, v2, w] = input[i];
    adjacentList[v1].push({ vertex: v2, weight: w });
  }

  class MinHeap {
    #heap;

    constructor() {
      this.#heap = [];
    }

    push(node, dist) {
      this.#heap.push({ node, dist });
      this.#bubbleUp();
    }

    pop() {
      if (this.#heap.length === 1) return this.#heap.pop();
      const top = this.#heap[0];
      this.#heap[0] = this.#heap.pop();
      this.#bubbleDown();
      return top;
    }

    #bubbleUp() {
      let idx = this.#heap.length - 1;
      while (idx > 0) {
        const parent = Math.floor((idx - 1) / 2);
        if (this.#heap[parent].dist <= this.#heap[idx].dist) break;
        [this.#heap[parent], this.#heap[idx]] = [this.#heap[idx], this.#heap[parent]];
        idx = parent;
      }
    }

    #bubbleDown() {
      let idx = 0;
      const length = this.#heap.length;
      while (true) {
        const left = idx * 2 + 1;
        const right = idx * 2 + 2;
        let smallest = idx;
        if (left < length && this.#heap[left].dist < this.#heap[smallest].dist)
          smallest = left;
        if (right < length && this.#heap[right].dist < this.#heap[smallest].dist)
          smallest = right;
        if (smallest === idx) break;
        [this.#heap[idx], this.#heap[smallest]] = [this.#heap[smallest], this.#heap[idx]];
        idx = smallest;
      }
    }

    size() {
      return this.#heap.length;
    }
  }

  const dijkstra = (graph, start) => {
    const distance = {};
    for (let i = 1; i <= vNum; i++) distance[i] = Number.MAX_SAFE_INTEGER;
    distance[start] = 0;
    const pq = new MinHeap();
    pq.push(start, 0);

    while (pq.size()) {
      const { node, dist } = pq.pop();
      if (dist > distance[node]) continue;
      for (const { vertex, weight } of graph[node]) {
        const newDist = dist + weight;
        if (newDist < distance[vertex]) {
          distance[vertex] = newDist;
          pq.push(vertex, newDist);
        }
      }
    }
    return distance;
  };
  const distance = dijkstra(adjacentList, start);
  console.log(distance[end]);
});
