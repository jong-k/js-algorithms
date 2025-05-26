// piece of data - val
// reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const first = new Node("Hi");
// first.next = new Node('There');
// first.next.next = new Node('How');
// first.next.next.next = new Node('Are');
// first.next.next.next.next = new Node('You');

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      // 값이 없으면
      this.head = newNode;
      this.tail = this.head; // newNode 대신 this.head 를 가리키게 함
    } else {
      this.tail.next = newNode; // this.tail 은 push 동작 전 마지막 node
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      // current.next 가 null 이 되기 직전에 멈춤
      newTail = current; // while 이 끝나면 tail 직전
      current = current.next; // while 이 끝나면 tail
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      // 이 조건 추가하지 않으면 pop 계속 가능
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  // head / tail 먼저 바꾸고 그 다음에 연결 끊는 방식 주로 사용
  shift() {
    if (!this.head) return undefined;
    const currentHead = this.head;
    this.head = this.head.next; // 1개 남은 리스트일 경우 head 가 자동으로 null 됨
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    // node 값을 반환하는게 아니라 node 자체를 반환
    if (idx < 0 || idx >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== idx) {
      counter++;
      current = current.next;
    }
    return current;
  }

  set(idx, val) {
    const foundNode = this.get(idx);
    if (!foundNode) return false;
    foundNode.val = val;
    return true;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    else if (idx === 0 && this.unshift(val))
      return true; // return !!this.unshift(val) 방법도 있음
    else if (idx === this.length && this.push(val)) return true;
    else {
      const newNode = new Node(val);
      const prevNode = this.get(idx - 1);
      newNode.next = this.get(idx);
      prevNode.next = newNode;
      this.length++;
      return true;
    }
  }

  // currentNode.next = null 은 굳이 필요없음
  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    const currentNode = this.get(idx);
    if (idx === 0 && this.shift()) return currentNode;
    else if (idx === this.length - 1 && this.pop()) return currentNode;
    else {
      const prevNode = this.get(idx - 1);
      prevNode.next = this.get(idx + 1);
      this.length--;
      return currentNode;
    }
  }
  // 11 12 13 14
  reverse() {
    let currentNode = this.head; // 11
    [this.head, this.tail] = [this.tail, this.head];
    let prevNode = null;
    let nextNode;
    while (currentNode) {
      // 11
      nextNode = currentNode.next; // 12
      currentNode.next = prevNode; // 11 <- 12
      prevNode = currentNode; // prev : 11
      currentNode = nextNode; // current : 12
    }
    return this;
  }

  print() {
    // reverse 메서드를 테스트하기 위해 구현한 함수
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr); // 리스트를 어레이 형태로 출력
  }

  rotate(num) {
    // n회 회전
    const realNum = num % 5;
    if (realNum > 0) {
      for (let i = 0; i < realNum; i++) {
        this.push(this.shift().val);
      }
    } else if (realNum < 0) {
      for (let i = 0; i < -realNum; i++) {
        this.unshift(this.pop().val);
      }
    }
  }
}

const myList = new SinglyLinkedList();
myList.push(30); // head: 30, tail: 30, length: 1
myList.push(40); // head: 30, tail: 40, length: 2
