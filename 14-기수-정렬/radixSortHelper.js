// 1. 자릿수 알아내기 (getDigit 함수)
// 이 함수는 뒤에서 n번째 자리의 수를 반환한다
// 즉, reverse index 를 return
// getDigit(12345, 0); // 5
// getDigit(12345, 1); // 4
// getDigit(12345, 5); // 0

// 내가 구현한 함수
// function getDigit (num, place) {
//   let str = String(num);
//   if (place === str.length) return 0;
//   return str[str.length - 1 - place];
// }

// solution
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// 2. 가장 큰 수의 자릿수 알아내기 (digitCount 함수)
// 예를 들면, 10자리 수가 있다면 10번의 연산이 필요하다.
// 이처럼 최대 몇 번의 연산이 필요한지 알아내면 된다.
// digitCount(1); // 1
// digitCount(123); // 3

// 음수의 자릿수도 알아낼 수 있음
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
// Math.log10(0) == -Infinity
// Math.log10(5) === 0..
// Math.log10(1000) === 3..

// 3. 배열에서 가장 큰 수의 자릿수를 얻기 (mostDigits 함수)
// mostDigits([1234, 36, 7]); // 4

// 내가 구현한 코드 -> 음수이면 작동 X..
// function mostDigits(arr) {
//   const max = Math.max(...arr);
//   if (num === 0) return 1;
//   return Math.floor(Math.log10(Math.abs(max))) + 1;
// }

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, nums[i]);
  }
  return maxDigits;
}
// 배열을 순회하며 maxDigits 에 자동으로 최댓값이 쌓임
