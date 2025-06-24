class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}
// 최소 이진 힙을 사용
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
        ) {
          swapIndex = rightIndex;
        }
      }
      if (!swapIndex) break;
      // swap
      this.queue[index] = this.queue[swapIndex];
      this.queue[swapIndex] = node;
      index = swapIndex;
    }
  }
}
