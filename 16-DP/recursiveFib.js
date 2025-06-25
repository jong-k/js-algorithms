// only 재귀
// const fib = (n) => {
//   if (n <= 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// };

// 재귀 with 메모이제이션
const fib = (n, memo = [0, 1, 1]) => {
  if (memo[n] !== undefined) return memo[n];
  const res = fib(n - 1, memo) + fib(n - 2, memo);
  // 모든 재귀 호출에서 memo 업데이트 내용이 공유됨
  memo[n] = res;
  return res;
};

// test cases
console.log(fib(1)); // 1
console.log(fib(2)); // 1
console.log(fib(3)); // 2
console.log(fib(4)); // 3
console.log(fib(5)); // 5
console.log(fib(6)); // 8
