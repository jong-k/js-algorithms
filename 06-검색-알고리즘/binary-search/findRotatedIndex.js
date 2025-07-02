/*
  O(Log N) 에 해결해야 하므로 이진 탐색을 사용해야 함

  배열이 회전되어 있으므로 두 부분으로 나눠야 함
  예를 들어,
  [ [ 3 4 ] [ 1 2 ] ] 처럼 나누는데, 나눠지는 지점의 pivot을 찾아야 함
  그러면 target이 여기서 어디에있는지만 알면 됨
  
  1. 배열을 2부분으로 나누기
  -> 이진 탐색
  -> 왼쪽 배열이 끝나는 지점의 인덱스를 찾자
  
  2. target이 왼쪽 배열에 있는지 오른쪽 배열에 있는지 확인해서 이진탐색으로 찾기
  */
const findRotatedIndex = (arr, target) => {
  if (arr.length === 0) return -1;

  const lastIndex = arr.length - 1;

  const findPivot = () => {
    let left = 0;
    let right = lastIndex;
    // 배열이 정렬되어 있다면 가장 마지막 인덱스 반환
    if (arr[left] < arr[right]) return right;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (mid < lastIndex && arr[mid] > arr[mid + 1]) return mid;
      else if (arr[mid] <= arr[lastIndex]) right = mid - 1;
      else if (arr[mid] > arr[lastIndex]) left = mid + 1;
    }
  };

  const findTarget = (leftIndex, rightIndex) => {
    let left = leftIndex;
    let right = rightIndex;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) return mid;
      else if (arr[mid] < target) left = mid + 1;
      else if (arr[mid] > target) right = mid - 1;
    }
    return -1;
  };

  const pivotIndex = findPivot();

  if (target >= arr[0] && target <= arr[pivotIndex]) return findTarget(0, pivotIndex);
  if (target >= arr[pivotIndex + 1] && target <= arr[lastIndex])
    return findTarget(pivotIndex + 1, lastIndex);
  return -1;
};

// test cases
console.log(findRotatedIndex([3, 4, 1, 2], 4)); // 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // 6
console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); // -1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // -1
console.log(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)); // 5
