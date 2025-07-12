function ListNode(val) {
  this.val = val;
  this.next = null;
}

const hasCycle = (head) => {
  if (!head) return false;
  let slowPointer = head.next;
  let fastPointer = head.next?.next;

  while (slowPointer && fastPointer) {
    if (slowPointer === fastPointer) return true;
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next?.next;
  }
  return false;
};

// test cases
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node1;
console.log(hasCycle(node1));
