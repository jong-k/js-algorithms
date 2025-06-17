function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let prevIndex = i - 1;
    // 앞 부분이 정렬되어 있으면 반복 종료
    while (prevIndex >= 0 && arr[prevIndex] > current) {
      arr[prevIndex + 1] = arr[prevIndex];
      prevIndex--;
    }
    arr[prevIndex + 1] = current;
  }
  return arr;
}

// test cases
console.log(insertionSort([3, 3, 8, 4, 2])); // [2, 3, 3, 4, 8]
console.log(insertionSort([1, 2, 1, 4, 5])); // [1, 1, 2, 4, 5]
console.log(insertionSort([10, 9, 10, 7, 6])); // [6, 7, 9, 10, 10]
