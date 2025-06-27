class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(value, priority) {
    this.queue.push({ value, priority });
    this.queue.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.queue.shift();
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    if (this.adjacencyList[vertex1])
      this.adjacencyList[vertex1].push({ vertex: vertex2, weight });
    if (this.adjacencyList[vertex2])
      this.adjacencyList[vertex2].push({ vertex: vertex1, weight });
  }

  /*
인접 리스트 예시
A: [{ vertex: 'B', weight: 4 }, { vertex: 'C', weight: 2 }],
B: [{ vertex: 'A', weight: 4 }, { vertex: 'E', weight: 3}],
C: [{ vertex: 'A', weight: 2 }, { vertex: 'F', weight: 4}],
D: [{ vertex: 'C', weight: 2 }, { vertex: 'E', weight: 3}, { vertex: 'F', weight: 1}],
E: [{ vertex: 'B', weight: 3 }, { vertex: 'D', weight: 3}, { vertex: 'F', weight: 1}],
F: [{ vertex: 'C', weight: 4 }, { vertex: 'D', weight: 1}, { vertex: 'E', weight: 1}],
*/

  dijkstra(start, end) {
    const distances = {};
    const previous = {};
    const pq = new PriorityQueue();
    const path = [];
    let smallestNode;

    // 초기값 입력
    for (const vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        pq.enqueue(vertex, 0);
      } else {
        distances[vertex] = Number.MAX_SAFE_INTEGER;
        pq.enqueue(vertex, Number.MAX_SAFE_INTEGER);
      }
      previous[vertex] = null;
    }

    while (pq.queue.length) {
      smallestNode = pq.dequeue().value;

      if (smallestNode === end) {
        while (previous[smallestNode]) {
          path.push(smallestNode);
          smallestNode = previous[smallestNode];
        }
        path.push(start);
        break;
      }

      if (smallestNode || distances[smallestNode] !== Number.MAX_SAFE_INTEGER) {
        for (const neighbor of this.adjacencyList[smallestNode]) {
          // neighbor: { vertex: 'B', weight: 4 }
          const candidate = distances[smallestNode] + neighbor.weight;
          const nextNeighbor = neighbor.vertex;
          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallestNode;
            pq.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return {
      path: path.reverse(),
      distance: distances[end],
    };
  }
}

const g = new WeightedGraph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("F", "E", 1);

console.log(g.dijkstra("A", "E"));
