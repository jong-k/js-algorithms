// 백준 14916 거스름돈
// 그리디로 해결했지만, DP로도 해결 가능
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = 0;

rl.on("line", (line) => {
  N = parseInt(line);
}).on("close", () => {
  let fiveCount = Math.floor(N / 5);
  N %= 5;
  let twoCount = Math.floor(N / 2);
  N %= 2;

  // 5원 동전을 덜 써가면서 2원 동전으로 그만큼 채울 수 있는지 확인
  if (N > 0) {
    while (fiveCount > 0) {
      fiveCount--;
      N += 5;
      if (N % 2 === 0) {
        twoCount += Math.floor(N / 2);
        N %= 2;
        break;
      }
    }
  }

  const result = N > 0 ? -1 : fiveCount + twoCount;
  console.log(result);
});
