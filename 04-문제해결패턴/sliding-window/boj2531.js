// 백준 2531 회전초밥
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  // N: 초밥 접시 수
  // d: 초밥 종류 수
  // k: 연속해서 먹는 초밥 접시 수
  // c: 쿠폰 번호
  const [N, d, k, c] = input[0].split(" ").map(Number);
  // 초밥 접시 번호 배열
  const sushiNums = input.slice(1).map(Number);

  // 최대 초밥 종류 수
  let maxKinds = 0;
  // 초밥 종류를 세기 위한 Map
  const count = new Map();

  // 초기 window 만들기
  for (let i = 0; i < k; i++) {
    count.set(sushiNums[i], (count.get(sushiNums[i]) || 0) + 1);
  }
  // maxKinds 업데이트
  maxKinds = count.size + (count.has(c) ? 0 : 1);

  // 첫 window 이후의 초밥 접시 탐색
  // k = 4 일 때 i = 1 일때는
  // i = 0 초밥 제거하고 i + k - 1 번째 초밥 추가
  for (let i = 1; i < N; i++) {
    const removedSushi = sushiNums[i - 1];
    count.set(removedSushi, count.get(removedSushi) - 1);
    if (count.get(removedSushi) === 0) count.delete(removedSushi);

    // 초밥 접시 번호 배열이 원형이므로, (i + k - 1) % N을 사용하여 다음 초밥 접시를 추가
    // 예 k = 4, i = 7 일 때는
    // (7 + 4 - 1) % 8 = 2 이므로, sushiNums[2]을 추가
    const addedSushi = sushiNums[(i + k - 1) % N];
    count.set(addedSushi, (count.get(addedSushi) || 0) + 1);

    const kinds = count.size + (count.has(c) ? 0 : 1);
    maxKinds = Math.max(maxKinds, kinds);
  }

  console.log(maxKinds);
});

// 시간 복잡도: O(N)
