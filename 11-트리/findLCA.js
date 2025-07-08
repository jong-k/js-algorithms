class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

function findLCA(root, node1, node2) {
  if (!root) return null;

  // 루트 노드가 node1 or node2 이면 루트 노드 반환
  if (root.val === node1.val || root.val === node2.val) return root;

  // 왼쪽과 오른쪽 서브트리 탐색
  const left = findLCA(root.left, node1, node2);
  const right = findLCA(root.right, node1, node2);

  // 찾을 두 노드가 각각 왼쪽 자식, 오른쪽 자식에 있다면 현재 노드 반환
  if (left && right) return root;

  // 왼쪽 또는 오른쪽에서만 발견되면 발견된 노드 반환
  return left || right;
}

// 예시 트리 생성
//         1
//       /   \
//      2     3
//     / \   / \
//    4   5 6   7
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

// test cases
const node1 = root.left.left; // 4
const node2 = root.left.right; // 5
const lca = findLCA(root, node1, node2);
console.log(lca.val); // 2
