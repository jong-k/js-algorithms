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

// 10 24 76 73 72 1 9
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid)); // 10 24 76
  const right = mergeSort(arr.slice(mid)); // 73 72 1 9
  return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));
