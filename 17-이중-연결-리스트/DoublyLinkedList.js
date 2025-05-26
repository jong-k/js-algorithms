// 단일 연결 리스트와 다르게 prev 속성도 필요
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // next 연결 -> prev 연결 -> tail 변경하면 임시 변수 필요없음 (메모리 줄이자)
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.head === null) return undefined;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (this.length === 0) return undefined;
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx > this.length - 1) return null;
    let count;
    let currentNode;
    if (idx < this.length / 2) {
      count = 0;
      currentNode = this.head;
      while (count !== idx) {
        count++;
        currentNode = currentNode.next;
      }
    } else {
      count = this.length - 1;
      currentNode = this.tail;
      while (count !== idx) {
        count--;
        currentNode = currentNode.prev;
      }
    }
    return currentNode;
  }

  set(idx, val) {
    const foundNode = this.get(idx);
    if (!foundNode) return false;
    foundNode.val = val;
    return true;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length - 1) return false;
    if (idx === 0 && this.unshift(val)) return true;
    if (idx === this.length - 1 && this.push(val)) return true;
    const newNode = new Node(val);
    const prevNode = this.get(idx - 1);
    const originalNode = this.get(idx);
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = originalNode;
    originalNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx > this.length - 1) return undefined;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    const foundNode = this.get(idx);
    foundNode.prev.next = foundNode.next;
    foundNode.next.prev = foundNode.prev;
    foundNode.prev = null;
    foundNode.next = null;
    this.length--;
    return foundNode;
  }
  // T         H
  // 11 12 13 14
  reverse() {
    [this.head, this.tail] = [this.tail, this.head];
    // 뒤의 head에서부터 start ~ tail.next가 null이 될때까지 순회 (현재는 12)
    let currentNode = this.head;
    while (currentNode) {
      [currentNode.next, currentNode.prev] = [
        currentNode.prev,
        currentNode.next,
      ];
      currentNode = currentNode.next;
    }
    return this;
  }
}

const myList = new DoublyLinkedList();
myList.push(20);
myList.push(30);
myList.push(40);
