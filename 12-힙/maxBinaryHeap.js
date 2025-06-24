class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parentElement = this.values[parentIndex];

      if (element <= parentElement) break;

      this.values[index] = parentElement;
      this.values[parentIndex] = element;
      index = parentIndex;
    }
  }

  extractMax() {
    if (this.values.length === 0) return undefined;
    const max = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      const leftIndex = 2 * index + 1;
      const rightIndex = 2 * index + 2;
      let leftElement, rightElement;
      let swapIndex = null;

      if (leftIndex < length) {
        leftElement = this.values[leftIndex];
        if (leftElement > element) swapIndex = leftIndex;
      }
      if (rightIndex < length) {
        rightElement = this.values[rightIndex];
        if (
          (!swapIndex && rightElement > element) ||
          (swapIndex && rightElement > leftElement)
        )
          swapIndex = rightIndex;
      }
      if (!swapIndex) break;
      // swap
      this.values[index] = this.values[swapIndex];
      this.values[swapIndex] = element;
      index = swapIndex;
    }
  }
}
