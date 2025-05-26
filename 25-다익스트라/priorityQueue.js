// 다익스트라 알고리즘에서 사용하기 위한 간소화 버전
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

const pq = new PriorityQueue();

pq.enqueue("B", 3);
pq.enqueue("C", 5);
pq.enqueue("D", 2);
