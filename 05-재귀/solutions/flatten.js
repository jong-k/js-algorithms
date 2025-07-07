function flatten(arr) {
  if (arr.length === 0) return [];
  const [first, ...rest] = arr;

  return Array.isArray(first)
    ? [...flatten(first), ...flatten(rest)]
    : [first, ...flatten(rest)];
}

// Test cases
console.log(flatten([1, 2, [3, 4], 5])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4]], 5])); // [1, 2, 3, 4, 5]
console.log(flatten([[1, 2], [3, 4], 5])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, 3], [4, [5, 6]]])); // [1, 2, 3, 4, 5, 6]
console.log(flatten([])); // []
