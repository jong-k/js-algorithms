function validAnagram(word1, word2) {
  if (word1.length !== word2.length) return false;

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (const char of word1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }
  for (const char of word2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }

  for (const key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
  }

  return true;
}

// test cases
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("listen", "silent")); // true
console.log(validAnagram("hello", "world")); // false
console.log(validAnagram("aabbcc", "abcabc")); // true
