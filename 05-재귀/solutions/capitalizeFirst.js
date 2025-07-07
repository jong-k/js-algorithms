function capitalizeFirst(arr) {
  if (arr.length === 0) return [];

  const [first, ...rest] = arr;
  const capitalizedFirstStr = first[0].toUpperCase() + first.slice(1);
  return [capitalizedFirstStr, ...capitalizeFirst(rest)];
}

// Test cases
console.log(capitalizeFirst(["car", "taco", "banana"])); // ["Car", "Taco", "Banana"]
console.log(capitalizeFirst(["hello", "world"])); // ["Hello", "World"]
console.log(capitalizeFirst(["a", "b", "c"])); // ["A", "B", "C"]
console.log(capitalizeFirst([])); // []
