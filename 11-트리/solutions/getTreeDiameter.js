// 백준 1167 트리의 지름
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  const vNum = parseInt(input[0]);
  input = input.map((line) => line.split(" ").map(Number));
  const adjacentList = {};
  for (let i = 1; i <= vNum; i++) {
    adjacentList[input[i][0]] = [];
    for (let j = 1; j < input[i].length - 1; j += 2) {
      const vertex = input[i][j];
      const weight = input[i][j + 1];
      adjacentList[input[i][0]].push({ vertex, weight });
    }
  }
  /*  인접 리스트 형태
  console.log(adjacentList);
  {
  '1': [ { vertex: 3, weight: 2 } ],
  '2': [ { vertex: 4, weight: 4 } ],
  '3': [ { vertex: 1, weight: 2 }, { vertex: 4, weight: 3 } ],
  '4': [
    { vertex: 2, weight: 4 },
    { vertex: 3, weight: 3 },
    { vertex: 5, weight: 6 }
  ],
  '5': [ { vertex: 4, weight: 6 } ]
  }
  */

  // 특정 정점에서 가장 먼 정점과 거리 구하는 dfs 함수
  const farthestFrom = (start) => {
    const distance = {}; // 각 정점까지의 거리
    for (let i = 1; i <= vNum; i++) distance[i] = -1;
    const stack = [start];
    distance[start] = 0;

    while (stack.length) {
      const node = stack.pop();
      for (const { vertex, weight } of adjacentList[node]) {
        if (distance[vertex] === -1) {
          distance[vertex] = distance[node] + weight;
          stack.push(vertex);
        }
      }
    }

    let maxNode = start;
    let maxDist = 0;
    for (let i = 1; i <= vNum; i++) {
      if (distance[i] > maxDist) {
        maxDist = distance[i];
        maxNode = i;
      }
    }
    return { maxNode, maxDist };
  };

  const { maxNode } = farthestFrom(1); // 시작점으로 아무 정점 지목하고 가장 먼 정점 구하면 이 정점이 지름 PQ를 구성하는 P or Q
  const { maxDist } = farthestFrom(maxNode); // PQ 구해서 거리 구하기
  console.log(maxDist);
});
