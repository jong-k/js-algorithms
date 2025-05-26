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

console.log(merge([1, 2], [3, 4]));
//      _          <- 배열 끝에 도달하면 index = 3(arr.length)
// [1 2 3] [4 5 6]
//  그래서 while loop 해당 안됨
