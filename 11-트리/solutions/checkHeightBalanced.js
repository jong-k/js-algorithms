class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

// height-balanced tree
// root의 양쪽 서브트리간의 height 차이가 1보다 크면 false 반환하는 함수
function checkHeightBalanced(root) {
  const checkHeight = (node) => {
    if (!node) return 0;

    const leftHeight = checkHeight(node.left);
    if (leftHeight === -1) return -1;

    const rightHeight = checkHeight(node.right);
    if (rightHeight === -1) return -1;

    if (Math.abs(leftHeight - rightHeight) > 1) return -1;
    return Math.max(leftHeight, rightHeight) + 1;
  };
  return checkHeight(root) !== -1;
}

// 예시 트리 생성
//         1
//       /   \
//      2     3
//     / \   / \
//    4   5 6   7

const root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);
root1.left.left = new Node(4);
root1.left.right = new Node(5);
root1.right.left = new Node(6);
root1.right.right = new Node(7);

console.log(checkHeightBalanced(root1)); // true

// 예시 트리 생성
//         1
//       /   \
//      2     3
//     /
//    4
//  /
//  5

const root2 = new Node(1);
root2.left = new Node(2);
root2.right = new Node(3);
root2.left.left = new Node(4);
root2.left.left.left = new Node(5);

console.log(checkHeightBalanced(root2)); // false
