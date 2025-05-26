// 우선순위 큐를 힙이 아닌 배열로 작성
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort(); // add 하고나면 다시 정렬
  }
  // 가장 작은 priority를 가진 값이 나와야 함
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight }); // 키값 입력하지 않으면 프로퍼티값에 동일한 이름 들어감
    this.adjacencyList[v2].push({ node: v1, weight });
  }
  dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    const path = [];
    let smallest;
    // 초기값 입력
    for (const vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Number.MAX_SAFE_INTEGER;
        nodes.enqueue(vertex, Number.MAX_SAFE_INTEGER);
      }
      previous[vertex] = null;
    }

    while (nodes.values.length) {
      smallest = nodes.dequeue().val; // 정점. 초기값 A
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      // 좌항은 smallest가 있을떄 (모든 큐 소진 x)
      // 우항은 초기값일때
      if (smallest || distances[smallest] !== Number.MAX_SAFE_INTEGER) {
        for (const neighbor in this.adjacencyList[smallest]) {
          // neighbor는 인덱스
          // 인접 노드 찾기
          const nextNode = this.adjacencyList[smallest][neighbor];
          // 거리 계산
          const candidate = distances[smallest] + nextNode.weight;
          const nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            // 거리 업데이트
            distances[nextNeighbor] = candidate;
            // 이전 노드 업데이트
            previous[nextNeighbor] = smallest;
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

const g = new WeightedGraph();
// 정점 추가
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
// 간선 추가
g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("F", "E", 1);
// 인접 리스트
/*
A: [{ node: 'B', weight: 4 }, { node: 'C', weight: 2 }],
B: [{ node: 'A', weight: 4 }, { node: 'E', weight: 3}],
C: [{ node: 'A', weight: 2 }, { node: 'F', weight: 4}],
D: [{ node: 'C', weight: 2 }, { node: 'E', weight: 3}, { node: 'F', weight: 1}],
E: [{ node: 'B', weight: 3 }, { node: 'D', weight: 3}, { node: 'F', weight: 1}],
F: [{ node: 'C', weight: 4 }, { node: 'D', weight: 1}, { node: 'E', weight: 1}],
*/
