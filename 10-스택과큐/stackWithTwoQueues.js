class Stack {
  constructor() {
    this.queue1 = new Queue();
    this.queue2 = new Queue();
  }

  push(val) {
    this.queue1.enqueue(val);
    while (this.queue2.size) {
      const dequeued = this.queue2.dequeue();
      this.queue1.enqueue(dequeued);
    }
    [this.queue1, this.queue2] = [this.queue2, this.queue1];
    return this;
  }
  pop() {
    return this.queue2.dequeue();
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(data) {
    const node = new Node(data);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    const temp = this.first;
    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

// test cases 추가

const stack = new Stack();
stack.push(10).push(20).push(30);
console.log(stack.pop()); // 30
stack.push(40).push(50);
console.log(stack.pop()); // 50
console.log(stack.pop()); // 40
console.log(stack.pop()); // 20
