// 이진 힙 우선순위 큐를 사용하여 시간 복잡도 개선
class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.queue.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.queue.length - 1;
    const node = this.queue[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parentNode = this.queue[parentIndex];

      if (node.priority >= parentNode.priority) break;

      this.queue[index] = parentNode;
      this.queue[parentIndex] = node;
      index = parentIndex;
    }
  }

  dequeue() {
    if (this.queue.length === 0) return undefined;

    const minNode = this.queue[0];
    const lastNode = this.queue.pop();

    if (this.queue.length > 0) {
      this.queue[0] = lastNode;
      this.sinkDown();
    }
    return minNode;
  }

  sinkDown() {
    let index = 0;
    const length = this.queue.length;
    const node = this.queue[0];

    while (true) {
      const leftIndex = 2 * index + 1;
      const rightIndex = 2 * index + 2;
      let leftNode, rightNode;
      let swapIndex = null;

      if (leftIndex < length) {
        leftNode = this.queue[leftIndex];
        if (leftNode.priority < node.priority) swapIndex = leftIndex;
      }
      if (rightIndex < length) {
        rightNode = this.queue[rightIndex];
        if (
          (!swapIndex && rightNode.priority < node.priority) ||
          (swapIndex && rightNode.priority < leftNode.priority)
        )
          swapIndex = rightIndex;
      }
      if (!swapIndex) break;
      // swap
      this.queue[index] = this.queue[swapIndex];
      this.queue[swapIndex] = node;
      index = swapIndex;
    }
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
}
