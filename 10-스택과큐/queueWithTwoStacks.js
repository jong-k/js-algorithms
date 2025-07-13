class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(x) {
    this.stack1.push(x);
  }

  dequeue() {
    if (!this.stack2.length) {
      while (this.stack1.length) {
        const popped = this.stack1.pop();
        this.stack2.push(popped);
      }
    }
    return this.stack2.pop();
    ß;
  }
}
