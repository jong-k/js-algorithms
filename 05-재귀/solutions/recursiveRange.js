// n부터 0까지의 합
function recursiveRange(n) {
  if (n === 0) return 0;
  return n + recursiveRange(n - 1);
}

// Test cases
console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55
console.log(recursiveRange(0)); // 0
console.log(recursiveRange(1)); // 1
