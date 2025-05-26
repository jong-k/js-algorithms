class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const oldFirst = this.first;
      this.first = newNode;
      newNode.next = oldFirst;
    }
    return ++this.size; // 만약 this.size++ 쓰면 일단 리턴되고 그담에 증가함 (표현식 먼저 수행하고 그다음에 증가)
  }

  pop() {
    if (this.size === 0) return null;
    const poppedNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    poppedNode.next = null;
    this.size--;
    return poppedNode;
  }
}

const stack1 = new Stack();
