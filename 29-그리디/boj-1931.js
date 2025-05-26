/*
백준 1931 회의실 배정 (실버1)
각각 양의 정수인 회의 시작시간 a, 종료시간 b가 N개 주어진다.
사용할 수 있는 회의의 최대 갯수를 구하라

예제
11
1 4 v
3 5
0 6
5 7 v
3 8
5 9
6 10
8 11 v
8 12
2 13
12 14 v

일찍 종료되는 회의를 타겟팅 -> v 표시
일찍 종료되는 회의가 일단 최적해에 가까우므로 일찍 종료되는 희의를 고르고, (그리디)
다음 회의는 이전 회의 종료시간 이후에 시작해야 함

이 때, 그리디를 위해 데이터를 정렬해야 하는데, 1. 종료시간 오름차순, 2. 시작시간 오름차순 으로 정렬해야함
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
  const data = input
    .map((el) => el.split(" ").map(Number))
    .sort((a, b) => {
      if (a[1] === b[1]) return a[0] - b[0];
      return a[1] - b[1];
    });
  let current = 0;
  for (let i = 0; i < N; i++) {
    if (current > data[i][0]) continue;
    answer++;
    current = data[i][1];
  }
  console.log(answer);
});
