class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // push
  enqueue(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  // pop
  dequeue() {
    if (this.size === 0) return null;
    const removedNode = this.first;
    if (this.first === this.last) {
      this.first = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    return removedNode;
  }
}
