function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

// merge 함수 -> 두 개의 정렬된 배열을 합치는 함수
function merge(arr1, arr2) {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  const mergedArr = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < arr1.length && rightIdx < arr2.length) {
    if (arr1[leftIdx] <= arr2[rightIdx]) {
      mergedArr.push(arr1[leftIdx]);
      leftIdx++;
    } else {
      mergedArr.push(arr2[rightIdx]);
      rightIdx++;
    }
  }

  while (leftIdx < arr1.length) {
    mergedArr.push(arr1[leftIdx]);
    leftIdx++;
  }

  while (rightIdx < arr2.length) {
    mergedArr.push(arr2[rightIdx]);
    rightIdx++;
  }

  return mergedArr;
}

// test cases
// console.log(merge([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]

// test cases for mergeSort
console.log(mergeSort([10, 24, 76, 73, 72, 1, 9])); // [1, 9, 10, 24, 72, 73, 76]
