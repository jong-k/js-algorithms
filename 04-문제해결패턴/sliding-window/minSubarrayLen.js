function minSubArraylen(arr, target) {
  let sum = arr[0];
  let left = 0;
  let right = 0;
  let minLength = arr.length + 1;

  while (right < arr.length && left <= right) {
    if (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= arr[left];
      left++;
    } else {
      right++;
      sum += arr[right];
    }
  }
  return minLength === arr.length + 1 ? 0 : minLength;
}

// test cases
console.log(minSubArraylen([2, 3, 1, 2, 4, 3], 7)); // 2
console.log(minSubArraylen([1, 4, 4], 4)); // 1
console.log(minSubArraylen([1, 1, 1, 1, 1, 1], 11)); // 0
