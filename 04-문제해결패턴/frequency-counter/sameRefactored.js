function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const frequencyCounter = {};

  for (const element of arr2) {
    frequencyCounter[element] = (frequencyCounter[element] || 0) + 1;
  }
  for (const element of arr1) {
    if (!frequencyCounter[element ** 2]) return false;
    frequencyCounter[element ** 2]--;
  }
  for (const key in frequencyCounter) {
    if (frequencyCounter[key] !== 0) return false;
  }

  return true;
}

// Test cases

console.log("test1", same([1, 2, 3], [9, 1, 4])); // true
console.log("test2", same([1, 2, 3], [1, 9])); // false
console.log("test3", same([1, 2, 3], [1, 2, 3])); // false
