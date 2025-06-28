// 시간복잡도 제한: O(log N) -> 이진 탐색을 사용해야 함

const countZeroes = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  let firstZeroIndex = arr.length; // 기본값: 0이 없는 경우

  // 이진 탐색으로 첫 번째 0의 위치를 찾음
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === 0) {
      // 0을 찾았으면, 첫 번째 0인지 확인하기 위해 왼쪽 탐색(오른쪽은 이미 0이므로)
      firstZeroIndex = mid;
      right = mid - 1;
    } else {
      // 1을 찾았으면, 0은 오른쪽에 있으므로 오른쪽 탐색
      left = mid + 1;
    }
  }

  // 0의 개수는 배열 길이에서 첫 번째 0의 인덱스를 뺀 값
  return arr.length - firstZeroIndex;
};

// test cases
console.log(countZeroes([1, 1, 1, 0, 0, 0])); // 3
console.log(countZeroes([1, 1, 1, 1, 1])); // 0
console.log(countZeroes([0, 0, 0, 0, 0])); // 5
console.log(countZeroes([1, 0, 0, 0, 0])); // 4
