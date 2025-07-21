class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && !this.adjacencyList[vertex1].includes(vertex2))
      this.adjacencyList[vertex1].push(vertex2);
    if (this.adjacencyList[vertex2] && !this.adjacencyList[vertex2].includes(vertex1))
      this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return;

    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2,
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1,
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  /*
  인접리스트 예시
  {
    A: [B, C],
    B: [A, D],
    C: [A, E],
    D: [B, E, F],
    E: [C, D, F],
    F: [D, E]
  }
  */
  recursiveDFS(start) {
    const visited = {};
    const result = [];

    const dfs = (vertex) => {
      if (!this.adjacencyList[vertex]) return;
      visited[vertex] = true;
      result.push(vertex);

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) dfs(neighbor);
      });
    };
    dfs(start);
    return result;
  }

  iterativeDFS(start) {
    const stack = [start];
    const visited = { [start]: true };
    const result = [];

    while (stack.length) {
      const currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  BFS(start) {
    const queue = [start];
    const visited = { [start]: true };
    const result = [];

    while (queue.length) {
      const currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

const graph = new Graph();

graph.addVertex("S");
graph.addVertex("P");
graph.addVertex("Y");
graph.addVertex("N");
graph.addVertex("A");
graph.addVertex("D");
graph.addVertex("Q");

graph.addEdge("S", "P");
graph.addEdge("S", "N");
graph.addEdge("P", "D");
graph.addEdge("P", "Y");
graph.addEdge("Y", "Q");
graph.addEdge("Y", "A");

graph.addEdge("N", "A");
graph.addEdge("A", "D");
graph.addEdge("A", "Q");
graph.addEdge("D", "Q");

console.log(graph.adjacencyList);
console.log(graph.recursiveDFS("S"));
/*
[
  'S', 'P', 'D',
  'A', 'Y', 'Q',
  'N'
]
*/

console.log(graph.iterativeDFS("S"));
/*
[
  'S', 'N', 'A',
  'Q', 'D', 'Y',
  'P'
]
*/

console.log(graph.BFS("S"));
/*
[
  'S', 'P', 'N',
  'D', 'Y', 'A',
  'Q'
]
*/
