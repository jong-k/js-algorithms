// boj 11404 플로이드
// 데이터 준비
let [vNum, eNum, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
vNum = Number(vNum);
eNum = Number(eNum);
input = input.map((v) => v.split(" ").map(Number));

// 최단거리 행렬 만들기
const pathMatrix = Array.from({ length: vNum + 1 }, (v) =>
  Array(vNum + 1).fill(Number.POSITIVE_INFINITY),
); // n * n 행렬을 infinity로 채움
input.forEach(
  (el) =>
    (pathMatrix[el[0][el[1]]] = Math.min(el[2], pathMatrix[el[0][el[1]]])),
);
