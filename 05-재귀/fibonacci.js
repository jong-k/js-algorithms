// 재귀함수로 피보나치 수열 구현
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
// 1, 1, 2, 3, ...
// 1  2  3  4
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(5)); // 5
