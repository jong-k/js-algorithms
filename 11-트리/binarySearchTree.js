class Node {
  constructor(value) {
    this.value = value;
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
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.value) return undefined;
      if (val < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (val > current.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(val) {
    let current = this.root;
    while (current) {
      if (val < current.value) current = current.left;
      else if (val > current.value) current = current.right;
      else return !!current;
    }
    return false;
  }
  // bfs, dfs 등은 반드시 이진 탐색 트리에서만 사용 가능한 것은 아님 (일반 트리에서도 사용 가능)
  bfs() {
    if (!this.root) return [];
    const queue = [];
    const visited = [];
    queue.push(this.root);

    while (queue.length) {
      const current = queue.shift();
      visited.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return visited;
  }

  dfsPreOrder() {
    if (!this.root) return [];
    const visited = [];
    const traverse = (node) => {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return visited;
  }

  dfsPostOrder() {
    if (!this.root) return [];
    const visited = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    };
    traverse(this.root);
    return visited;
  }

  dfsInOrder() {
    if (!this.root) return [];
    const visited = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return visited;
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);
console.log(bst.dfsPostOrder());
