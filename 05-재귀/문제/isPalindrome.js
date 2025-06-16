// 주어진 문자열이 팰린드롬인지 확인하는 재귀 함수
function isPalindrome(str) {
  if (str.length <= 1) return true;

  const firstChar = str[0];
  const lastChar = str[str.length - 1];
  if (firstChar !== lastChar) return false;

  return isPalindrome(str.slice(1, -1));
}

// Test cases
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("a")); // true
console.log(isPalindrome("")); // true
