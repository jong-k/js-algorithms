class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(name) {
    if (!this.adjacencyList[name]) this.adjacencyList[name] = [];
  }
  addEdge(v1, v2) {
    // 방향 그래프로 만드려면 아래중 1개만 실행하면 됨
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }
  removeVertex(name) {
    while (this.adjacencyList[name].length) {
      const adjacentVertex = this.adjacencyList[name].pop();
      this.removeEdge(adjacentVertex, name);
    }
    delete this.adjacencyList[name];
  }
  /*
  {
    A: [B, C],
    B: [A, D],
    C: [A, E],
    D: [B, E, F],
    E: [C, D, F],
    F: [D, E]
  }
  */
  depthFirstSearchRecursive(start) {
    const result = [];
    const isVisited = {};
    const DFSR = (vertex) => {
      // if (!this.adjacencyList[vertex].length) return; // 이렇게 안하고 아래처럼 해도 됨
      if (!vertex) return;
      result.push(vertex);
      isVisited[vertex] = true;
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!isVisited[neighbor]) DFSR(neighbor);
      });
    };
    DFSR(start);
    return result; // [A, B, D ,E, C, F] (반시계 방향 순회함)
  }
  depthFirstSearchIterative(start) {
    const stack = [start];
    const result = [];
    const isVisited = { [start]: true }; // [] 안에 안넣으면 일반 문자열로 인식됨
    while (stack.length) {
      const currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!isVisited[neighbor]) {
          isVisited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result; // ['A', 'C', 'E', 'F', 'D', 'B'] -> 재귀 DFS와 결과 다름 (시계방향)
    // 스택 구조이기 때문에 가장 빠른 B가 나중에 방문됨!
  }
  breadthFirstSearch(start) {
    const queue = [start];
    const result = [];
    const isVisited = { [start]: true }; // [] 안에 안넣으면 일반 문자열로 인식됨
    while (queue.length) {
      const currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        // slice().reverse() 하면 순서 거꾸로 가능
        if (!isVisited[neighbor]) {
          isVisited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result; // ['A', 'B', 'C', 'D', 'E', 'F']
  }
}

const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
