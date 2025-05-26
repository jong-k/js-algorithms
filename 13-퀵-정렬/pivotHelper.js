//   _
// 4 8 2 1 5 7 6 3
//     _
// 4 2 8 1 5 7 6 3 p: 1
//       _
// 4 2 1 8 5 7 6 3 p: 2
//               _
// 4 2 1 8 5 7 6 3 p: 2
//
// 4 2 1 3 5 7 6 8 p: 3

const arr1 = [4, 8, 2, 1, 5, 7, 6, 3];

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivotIdx = 0; // 피벗 포인트를 맨 처음으로 설정
  for (let i = start + 1; i <= end; i++) {
    if (arr[start] > arr[i]) {
      pivotIdx++;
      [arr[pivotIdx], arr[i]] = [arr[i], arr[pivotIdx]];
    }
  }
  [arr[pivotIdx], arr[start]] = [arr[start], arr[pivotIdx]];
  return pivotIdx;
}

console.log(pivot(arr1)); // 3
console.log(arr1); // [ 3, 2, 1, 4, 5, 7, 6, 8 ]
