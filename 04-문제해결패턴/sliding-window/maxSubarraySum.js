function maxSubarraySum(arr, k) {
  let maxSum = 0;
  let currentSum = 0;

  if (arr.length < k) return null;

  for (let i = 0; i < k; i++) {
    currentSum += arr[i];
  }
  maxSum = currentSum;

  for (let i = k; i < arr.length; i++) {
    currentSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// test cases
console.log(maxSubarraySum([5, 2, 3, 1, 5], 2)); // 7
console.log(maxSubarraySum([1, 2, 3, 4, 5], 3)); // 12
