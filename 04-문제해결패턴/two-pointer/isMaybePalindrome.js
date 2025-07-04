/*
백준 17609 회문
*/
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  input.shift();

  // 순수 회문 판별
  const isPalindrome = (str, left, right) => {
    while (left < right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }
    return true;
  };

  const isMaybePalindrome = (str) => {
    const lastIndex = str.length - 1;
    if (isPalindrome(str, 0, lastIndex)) return 0;

    // 순수 회문이 아니면 유사 회문인지 검사
    let left = 0;
    let right = lastIndex;

    while (left < right) {
      // 양 포인터를 좁히면서 처음으로 불일치 문자가 등장하면
      // 불일치 왼쪽 문자와 오른쪽 문자를 각각 제거한 두 가지 케이스를 모두 확인
      // 모두 확인하지 않으면 반례에 막힐 수 있음
      if (str[left] !== str[right]) {
        const leftRemoved = isPalindrome(str, left + 1, right);
        const rightRemoved = isPalindrome(str, left, right - 1);

        return leftRemoved || rightRemoved ? 1 : 2;
      }
      left++;
      right--;
    }
    return 0;
  };

  const result = input.map((str) => isMaybePalindrome(str));
  console.log(result.join("\n"));
});
