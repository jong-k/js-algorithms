// 모든 배열 원소의 곱
function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

// Test cases
console.log(productOfArray([1, 2, 3, 4])); // 24
console.log(productOfArray([5, 6, 7])); // 210
console.log(productOfArray([])); // 1
console.log(productOfArray([10])); // 10
