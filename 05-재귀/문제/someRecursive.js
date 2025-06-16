// Array.some() 메서드를 재귀 함수로 구현
function someRecursive(arr, cb) {
  if (arr.length === 0) return false;
  const [first, ...rest] = arr;
  if (cb(first)) return true;
  return someRecursive(rest, cb);
}

// Test cases
console.log(someRecursive([1, 2, 3, 4], (val) => val % 2 !== 0)); // true
console.log(someRecursive([4, 6, 8, 9], (val) => val % 2 !== 0)); // true
console.log(someRecursive([4, 6, 8], (val) => val % 2 !== 0)); // false
