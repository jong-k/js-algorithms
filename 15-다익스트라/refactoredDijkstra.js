// 이진 힙 우선순위 큐를 사용하여 시간 복잡도 개선
class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority; // 값이 낮을 수록 우선순위가 높음
  }
}

class PriorityQueue {
  #queue;

  constructor() {
    this.#queue = [];
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.#queue.push(newNode);
    this.#bubbleUp();
  }

  #bubbleUp() {
    let index = this.#queue.length - 1;
    const node = this.#queue[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parentNode = this.#queue[parentIndex];

      if (node.priority >= parentNode.priority) break;

      this.#queue[index] = parentNode;
      this.#queue[parentIndex] = node;
      index = parentIndex;
    }
  }

  dequeue() {
    if (this.#queue.length === 0) return undefined;

    const minNode = this.#queue[0];
    const lastNode = this.#queue.pop();

    if (this.#queue.length > 0) {
      this.#queue[0] = lastNode;
      this.#sinkDown();
    }
    return minNode;
  }

  #sinkDown() {
    let index = 0;
    const length = this.#queue.length;
    const node = this.#queue[0];

    while (true) {
      const leftIndex = 2 * index + 1;
      const rightIndex = 2 * index + 2;
      let leftNode, rightNode;
      let swapIndex = null;

      if (leftIndex < length) {
        leftNode = this.#queue[leftIndex];
        if (leftNode.priority < node.priority) swapIndex = leftIndex;
      }
      if (rightIndex < length) {
        rightNode = this.#queue[rightIndex];
        if (
          (!swapIndex && rightNode.priority < node.priority) ||
          (swapIndex && rightNode.priority < leftNode.priority)
        )
          swapIndex = rightIndex;
      }
      if (!swapIndex) break;
      // swap
      this.#queue[index] = this.#queue[swapIndex];
      this.#queue[swapIndex] = node;
      index = swapIndex;
    }
  }

  size() {
    return this.#queue.length;
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

  addEdge(v1, v2, weight) {
    if (this.adjacencyList[v1]) this.adjacencyList[v1].push({ vertex: v2, weight });
    // if (this.adjacencyList[v2]) this.adjacencyList[v2].push({ vertex: v1, weight });
  }

  // 경로와 최단거리를 동시에 구하기
  dijkstra(start, end) {
    const distances = {};
    const previous = {};
    const pq = new PriorityQueue();
    const path = [];
    let smallestNode;

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

    while (pq.size()) {
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
          const candidateDistance = distances[smallestNode] + neighbor.weight;
          const neighborVertex = neighbor.vertex;
          if (candidateDistance < distances[neighborVertex]) {
            distances[neighborVertex] = candidateDistance;
            previous[neighborVertex] = smallestNode;
            pq.enqueue(neighborVertex, candidateDistance);
          }
        }
      }
    }
    return {
      path: path.reverse(),
      distance: distances[end],
    };
  }

  // 최단거리만 구하기
  dijkstra2(start) {
    const dist = {};
    for (const v in this.adjacencyList) dist[v] = Number.MAX_SAFE_INTEGER;
    dist[start] = 0;
    const pq = new PriorityQueue();
    pq.enqueue(start, 0);

    while (pq.size()) {
      const node = pq.dequeue();
      if (node.priority > dist[node.value]) continue;

      for (const { vertex, weight } of this.adjacencyList[node.value]) {
        const newDist = node.priority + weight;
        if (newDist < dist[vertex]) {
          dist[vertex] = newDist;
          pq.enqueue(vertex, newDist);
        }
      }
    }
    return dist;
  }
}
