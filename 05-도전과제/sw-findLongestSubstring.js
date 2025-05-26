// 문자열이 주어진다. 겹치는 알파벳이 없는 최대길이를 반환하는 함수를 작성한다
// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('bbbbbb') // 1
// Time : O(N)

function findLongestSubstring(str) {
  let longest = 0;
  const seen = {}; // 문자별로 0부터의 길이를 저장할 객체
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (seen[char]) {
      // 재등장한 문자이면 start를 바꿈(old -> new)
      start = Math.max(start, seen[char]);
    }
    longest = Math.max(longest, i - start + 1); // i - start
    seen[char] = i + 1; // 만약에 str이 character이면, c: 1, h: 2, a: 3, r: 4 ... 이렇게 길이를 저장
  }
  return longest;
}
