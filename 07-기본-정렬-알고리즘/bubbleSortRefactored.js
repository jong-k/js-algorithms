function bubbleSortRefactored(arr) {
  const n = arr.length;

  for (let i = n - 1; i > 0; i--) {
    let swapped = false;

    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

// test cases
console.log(bubbleSortRefactored([3, 3, 8, 4, 2])); // [2, 3, 3, 4, 8]
console.log(bubbleSortRefactored([1, 2, 1, 4, 5])); // [1, 1, 2, 4, 5]
console.log(bubbleSortRefactored([10, 9, 10, 7, 6])); // [6, 7, 9, 10, 10]
