function isSubsequence(word1, word2) {
  let index1 = 0;
  let index2 = 0;

  while (index1 < word1.length && index2 < word2.length) {
    if (word1[index1] === word2[index2]) index1++;
    index2++;
  }

  return index1 === word1.length;
}

// test cases
console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("axc", "ahbgdc")); // false
console.log(isSubsequence("abc", "acb")); // false
