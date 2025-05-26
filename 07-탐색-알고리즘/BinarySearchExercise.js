// binarySearch([1,2,3,4,5],2); // 1
// binarySearch([1,2,3,4,5],6); // -1

// 1 2 3 4 5 에서 2 찾기
// L   M   R

// L R
// M

//   R
//   L
//   M

function binarySearch(arr, val) {
  if (!arr.includes(val)) return -1;
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    if (arr[mid] === val) return mid;
    else if (arr[mid] < val) left = mid + 1;
    else if (arr[mid] > val) right = mid - 1;
  }
}
