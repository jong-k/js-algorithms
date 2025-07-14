/*
백준 2217 로프
각 로프들의 최대 하중이 주어진다. 주어진 로프들을 조합하여 들어올릴 수 있는 최대 중량을 출력하라

예
2
10
15

1. 10로프만 사용하는 경우 10만 들 수 있음
2. 15로프만 사용하는 경우 15만 들 수 있음
3. 두 로프를 사용하면 부하가 /2 만큼 분산되기 때문에 최소 로프의 2배인 20을 들 수 있음

그리디를 어떻게 활용할까?
우선 눈에 보이는 가장 최적해는 최대 중량 로프 15만 사용하는 것 (15)
그 다음은 2개를 사용하는 것
...

따라서 로프 중량을 내림차순으로 정렬하고 1.. N개를 사용하도록 하여 중량을 계산하면 된다
10 15 의 예
1. 15 * 1 = 15
2. 10 * 2 = 20 (정답)
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
let answer = 0;

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const N = +input.shift();
  const data = input.map(Number).sort((a, b) => a - b);
  for (let i = 1; i <= N; i++) {
    answer = Math.max(answer, data[N - i] * i);
  }
  console.log(answer);
});
