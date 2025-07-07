function capitalizeWords(arr) {
  if (arr.length === 1) return [arr[0].toUpperCase()];
  const [first, ...rest] = arr;
  return [first.toUpperCase(), ...capitalizeWords(rest)];
}

// test cases
console.log(capitalizeWords(["hello", "world"])); // ["HELLO", "WORLD"]
console.log(capitalizeWords(["javascript", "is", "fun"])); // ["JAVASCRIPT", "IS", "FUN"]
