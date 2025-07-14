/*
백준 11047 동전 0 (실버4)
자연수 K와 1원 부터 5만원 까지 다양한 가액의 동전 리스트가 주어질 때,
동전을 최소로 써서 K원을 만드는데 필요한 동전의 갯수를 구하라
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
  let [N, K] = input.shift().split(" ").map(Number);
  for (let i = N - 1; i >= 0; i--) {
    answer += Math.floor(K / +input[i]);
    K %= +input[i];
  }
  console.log(answer);
});
