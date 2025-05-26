// 2개의 자연수가 주어졌을 때, 이 숫자들의 각 자릿수들의 등장 빈도가 같은지 확인
// 시간 제한 : O(N)
// sameFrequency(182,218)  // true
// sameFrequency(217,218)  // false

function sameFrequency(num1, num2) {
  const strNum1 = num1.toString();
  const strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  const countNum1 = {};
  const countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  for (const key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}
