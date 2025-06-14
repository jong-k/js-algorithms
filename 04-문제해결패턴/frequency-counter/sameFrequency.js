function sameFrequency(num1, num2) {
  const strNum1 = num1.toString();
  const strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  const lookup = {};

  for (const char of strNum1) {
    lookup[char] = (lookup[char] || 0) + 1;
  }

  for (const char of strNum2) {
    if (!lookup[char]) {
      return false;
    }
    lookup[char]--;
  }
  return true;
}

// test cases
console.log(sameFrequency(123, 321)); // true
console.log(sameFrequency(123, 322)); // false
console.log(sameFrequency(1234, 431)); // false
