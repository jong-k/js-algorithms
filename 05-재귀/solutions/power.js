// 제곱(=Math.pow()) 구현
function power(base, square) {
  if (square === 0) return 1;
  if (square === 1) return base;

  return base * power(base, square - 1);
}

// Test cases
console.log(power(2, 3)); // 8
console.log(power(3, 2)); // 9
console.log(power(5, 0)); // 1
