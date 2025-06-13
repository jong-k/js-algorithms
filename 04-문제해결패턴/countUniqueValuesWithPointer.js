function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let count = 1;
  let left = 0;
  let right = 1;

  while (right < arr.length) {
    if (arr[left] !== arr[right]) {
      count++;
      left = right;
    }
    right++;
  }

  return count;
}

// test cases
console.log(countUniqueValues([1, 2, 3, 4, 5])); // 5
console.log(countUniqueValues([1, 1, 2, 2, 3, 3])); // 3
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-1, -1, 0, 1, 1])); // 3
