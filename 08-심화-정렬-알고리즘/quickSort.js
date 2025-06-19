function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = pivot(arr, left, right);

    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

function pivot(arr, start = 0, end = arr.length - 1) {
  const pivotValue = arr[start];
  // pivot이 위치할 인덱스. 왼쪽에는 pivot보다 작은 값, 오른쪽에는 pivot보다 큰 값
  let pivotIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivotValue) {
      pivotIndex++;
      [arr[pivotIndex], arr[i]] = [arr[i], arr[pivotIndex]];
    }
  }

  [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
  return pivotIndex;
}

// test cases
console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23])); // [-3, 1, 2, 2, 3, 4, 5, 6, 9, 23, 100]
console.log(quickSort([5, 3, 8, 4, 2, 7, 1, 6])); // [1, 2, 3, 4, 5, 6, 7, 8]
