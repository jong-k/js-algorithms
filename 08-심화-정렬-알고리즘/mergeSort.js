function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

// merge 함수 -> 두 개의 정렬된 배열을 합치는 함수
function merge(arr1, arr2) {
  const mergedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < arr1.length && rightIndex < arr2.length) {
    if (arr1[leftIndex] <= arr2[rightIndex]) {
      mergedArr.push(arr1[leftIndex]);
      leftIndex++;
    } else {
      mergedArr.push(arr2[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < arr1.length) {
    mergedArr.push(arr1[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < arr2.length) {
    mergedArr.push(arr2[rightIndex]);
    rightIndex++;
  }

  return mergedArr;
}

// test cases
// console.log(merge([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]

// test cases for mergeSort
console.log(mergeSort([10, 24, 76, 73, 72, 1, 9])); // [1, 9, 10, 24, 72, 73, 76]
