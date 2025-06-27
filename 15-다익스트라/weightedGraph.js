class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    if (this.adjacencyList[vertex1])
      this.adjacencyList[vertex1].push({ vertex: vertex2, weight });
    if (this.adjacencyList[vertex2])
      this.adjacencyList[vertex2].push({ vertex: vertex1, weight });
  }
}
