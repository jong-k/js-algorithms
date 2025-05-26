class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(name) {
    if (!this.adjacencyList[name]) this.adjacencyList[name] = [];
  }
  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight }); // 키값 입력하지 않으면 프로퍼티값에 동일한 이름 들어감
    this.adjacencyList[v2].push({ node: v1, weight });
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
  depthFirstSearchRecursive(start) {
    const result = [];
    const isVisited = {};
    const DFSR = (vertex) => {
      if (!vertex) return;
      result.push(vertex);
      isVisited[vertex] = true;
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!isVisited[neighbor]) DFSR(neighbor);
      });
    };
    DFSR(start);
    return result;
  }
  depthFirstSearchIterative(start) {
    const stack = [start];
    const result = [];
    const isVisited = { [start]: true };
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
    return result;
  }
  breadthFirstSearch(start) {
    const queue = [start];
    const result = [];
    const isVisited = { [start]: true };
    while (queue.length) {
      const currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!isVisited[neighbor]) {
          isVisited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}
