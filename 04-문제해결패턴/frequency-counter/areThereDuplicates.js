// frequency counter version
function areThereDuplicates(...args) {
  const lookup = {};

  for (const arg of args) {
    if (lookup[arg]) {
      return true;
    }
    lookup[arg] = 1;
  }

  return false;
}

// Set version (훨씬 간편!)
// function areThereDuplicates(...args) {
//   const uniqueArgs = new Set(args);
//   return uniqueArgs.size !== args.length;
// }

// test cases
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
