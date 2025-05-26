// pivot helper 함수가 solution과 동일한 값을 return하며
// 원래 배열도 동일하게 변화시키지만..
// 스택 오버플로 에러 발생
// 단지 pivot helper 함수에서 swap 함수를 구현하지 않아서??

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

// 4 6 9 1 2 5 3
//       4         <- 고정
// 3 2 1   6 9 5
//
//
//
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    // left === right 되면 배열 길이 1개 됨
    const pivotPoint = pivot(arr, left, right); // 3 (4가 있어야 할 위치)
    // left
    quickSort(arr, left, pivotPoint - 1);
    // right
    quickSort(arr, pivotPoint + 1, right);
  }
  return arr;
}

const arr1 = [4, 6, 9, 1, 2, 5, 3];
console.log(quickSort(arr1)); // 스택오버플로 에러
