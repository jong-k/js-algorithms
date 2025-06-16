function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  return arr;
}

// test cases
console.log(bubbleSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
console.log(bubbleSort([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
