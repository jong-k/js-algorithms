function validAnagram(word1, word2) {
  if (word1.length !== word2.length) return false;

  const frequencyCounter = {};

  for (const char of word1) {
    frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
  }

  for (const char of word2) {
    if (!frequencyCounter[char]) return false;
    frequencyCounter[char] -= 1;
  }

  return true;
}

// test cases
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("listen", "silent")); // true
console.log(validAnagram("hello", "world")); // false
console.log(validAnagram("aabbcc", "abcabc")); // true
