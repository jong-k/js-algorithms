function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }

    if (minIndex !== i) [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

// test cases
console.log(selectionSort([3, 3, 8, 4, 2])); // [2, 3, 3, 4, 8]
console.log(selectionSort([1, 2, 1, 4, 5])); // [1, 1, 2, 4, 5]
console.log(selectionSort([10, 9, 10, 7, 6])); // [6, 7, 9, 10, 10]
