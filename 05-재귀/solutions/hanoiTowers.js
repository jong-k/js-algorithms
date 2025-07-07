/*
백준 1914 하노이 탑
- N 20 이하이면 이동 횟수 + 과정을 출력
- N 20 초과이면 이동 횟수만 출력
  - 이동 횟수는 2^N - 1 이라는 공식 존재하므로 재귀 호출없이 계산만
  - 단, BigInt를 사용해야 함. JS에서 일반 숫자는 2^53 - 1 까지만 정확하게 표현 가능
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = 0;

rl.on("line", (line) => {
  input = parseInt(line.trim());
}).on("close", () => {
  const moves = [];
  const hanoiTowers = (n, start, middle, end) => {
    // N 1인 경우에는 start에서 end로 바로 이동
    if (n === 1) {
      moves.push(`${start} ${end}`);
      return;
    }
    // start -> middle 까지 n-1개를 이동 (end를 보조 기둥으로 사용)
    hanoiTowers(n - 1, start, end, middle);
    // start의 n번째 원반을 end로 이동
    moves.push(`${start} ${end}`);
    // middle -> end 까지 n-1개를 이동 (middle을 보조 기둥으로 사용)
    hanoiTowers(n - 1, middle, start, end);
  };

  if (input <= 20) {
    hanoiTowers(input, 1, 2, 3);
    console.log(moves.length);
    console.log(moves.join("\n"));
  } else {
    // 큰 수 처리
    console.log((2n ** BigInt(input) - 1n).toString());
  }
});
