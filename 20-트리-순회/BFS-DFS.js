// 이진탐색트리 코드에서 그대로 시작
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.val) return undefined;
      if (val > current.val) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = newNode;
          return this;
        }
      } else if (val < current.val) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = newNode;
          return this;
        }
      }
    }
  }

  find(val) {
    if (this.root === null) return undefined;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (val > current.val) {
        current = current.right;
      } else if (val < current.val) {
        current = current.left;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  BreadthFirstSearch() {
    const data = [],
      queue = [];
    queue.push(this.root);
    while (queue.length) {
      const current = queue.shift();
      data.push(current); // .val 을 해도 됨 (노드 값)
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return data;
  }

  DFSPreOrder() {
    const data = [];
    const current = this.root;
    const traverse = (node) => {
      data.push(node); // node.val로 해도 됨
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    };
    traverse(current);
    return data;
  }

  DFSPostOrder() {
    const data = [];
    const current = this.root;
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node); // node.val로 해도 됨
    };
    traverse(current);
    return data;
  }

  DFSInorder() {
    const data = [];
    const current = this.root;
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      data.push(node); // node.val로 해도 됨
      if (node.right) traverse(node.right);
    };
    traverse(current);
    return data;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
