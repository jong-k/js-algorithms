// two pointer version
function areThereDuplicates(...args) {
  const sortedArgs = args.toSorted((a, b) => (a > b ? 1 : -1));
  let left = 0;
  let right = 1;

  while (right < sortedArgs.length) {
    if (sortedArgs[left] === sortedArgs[right]) return true;

    left++;
    right++;
  }

  return false;
}

// test cases
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
