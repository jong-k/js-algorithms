// n까지의 수 모두 더하기
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(n) {
  if (n === 0) return 0;
  return n + recursiveRange(n - 1);
}

console.log(recursiveRange(10)); // 55
