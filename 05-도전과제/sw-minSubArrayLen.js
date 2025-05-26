// 2개의 인수가 주어진다 (자연수가 담긴 배열, 자연수)
// 합이 자연수 이상인 인접한 배열의 최소 길이를 구하라
// 즉, 자연수 이상의 값이며 무조건 배열 길이의 최소값을 구하면 된다
// Time : O(N)
// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> [4,3]
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> [5,4]
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> 62
// minSubArrayLen([1,4,16,22,5,7,8,9,10], 95) // 0

// solution과 동일
function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Number.POSITIVE_INFINITY;

  while (start < nums.length) {
    if (total < sum) {
      total += nums[end];
      end++;
    } else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    } else if (end >= nums.length) {
      break;
    }
  }
  return minLen === Number.POSITIVE_INFINITY ? 0 : minLen;
}
