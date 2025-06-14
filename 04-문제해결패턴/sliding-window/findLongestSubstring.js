// 모든 문자가 고유한 문자열의 최대 길이 구하기
function findLongestSubstring(str) {
  // 최초로 등장하는 알파벳의 0부터의 거리
  const charDistance = {};
  let maxLen = 0;
  let startIndex = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charDistance[char]) {
      startIndex = Math.max(startIndex, charDistance[char]);
    }
    maxLen = Math.max(maxLen, i - startIndex + 1);
    charDistance[char] = i + 1;
  }

  return maxLen;
}

// Test cases
console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
