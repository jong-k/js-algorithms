// arr: 자연수로 이루어진 오름차순 정렬된 배열
// target: arr에서 찾고자 하는 자연수
// 반환값: target의 빈도수
// 시간복잡도: O(log N) -> 이진 탐색을 사용해야 함
const sortedFrequency = (arr, target) => {
  const findFirstIndex = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    let firstIndex = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] === target) {
        firstIndex = mid;
        right = mid - 1;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return firstIndex;
  };

  const findLastIndex = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    let lastIndex = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] === target) {
        lastIndex = mid;
        left = mid + 1;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return lastIndex;
  };

  const firstIndex = findFirstIndex(arr, target);
  const lastIndex = findLastIndex(arr, target);
  if (firstIndex === -1 || lastIndex === -1) return -1;
  return lastIndex - firstIndex + 1;
};

// test cases
console.log(sortedFrequency([1, 2, 3, 4, 5], 2)); // 1
console.log(sortedFrequency([1, 2, 3, 4, 5], 6)); // -1
console.log(sortedFrequency([1, 2, 2, 2, 3, 4, 5], 2)); // 3
