function naiveStringSearch(text, target) {
  let count = 0;

  for (let i = 0; i <= text.length - target.length; i++) {
    for (let j = 0; j < target.length; j++) {
      if (text[i + j] !== target[j]) break;
      if (j === target.length - 1) count++;
    }
  }

  return count;
}

// Test cases
console.log(naiveStringSearch("wooparoopa", "oo")); // 2
console.log(naiveStringSearch("wowomgzomg", "omg")); // 2
