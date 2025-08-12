// 백준 1967 트리의 지름
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
  for (let i = 1; i <= vNum; i++) adjacentList[i] = [];
  for (let i = 1; i < input.length; i++) {
    const [v1, v2, w] = input[i];
    adjacentList[v1].push({ vertex: v2, weight: w });
    adjacentList[v2].push({ vertex: v1, weight: w });
  }

  const farthestFrom = (start) => {
    const distance = {};
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

  const { maxNode } = farthestFrom(1);
  const { maxDist } = farthestFrom(maxNode);
  console.log(maxDist);
});
