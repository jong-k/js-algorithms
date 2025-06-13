function countUniqueValues(arr) {
  const uniqueValues = new Set(arr);
  return uniqueValues.size;
}

// test cases
console.log(countUniqueValues([1, 2, 3, 4, 5])); // 5
console.log(countUniqueValues([1, 1, 2, 2, 3, 3])); // 3
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-1, -1, 0, 1, 1])); // 3
