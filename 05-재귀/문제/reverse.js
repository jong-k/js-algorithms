// 문자열을 거꾸로 출력하는 재귀 함수
function reverse(str) {
  if (str.length <= 1) return str;
  const len = str.length;
  return str[len - 1] + reverse(str.slice(0, len - 1));
}

// Test cases
console.log(reverse("hello")); // "olleh"
console.log(reverse("world")); // "dlrow"
console.log(reverse("")); // ""
console.log(reverse("a")); // "a"
console.log(reverse("abcde")); // "edcba"
