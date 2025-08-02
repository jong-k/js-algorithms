function getMajorityElement(nums) {
  let candidate = null;
  let count = 0;

  for (const num of nums) {
    if (count === 0) candidate = num;
    count += num === candidate ? 1 : -1;
  }

  /* 선택사항: 2번째 검증
  let majorityCount = 0;
  for (const num of nums) {
    if (num === candidate) majorityCount++;
  }

  return majorityCount > Math.floor(nums.length / 2) ? candidate : null;
  */
  return candidate;
}

// test cases
// 다수 요소가 반드시 존재하는 경우
const arr = [2, 2, 1, 1, 1, 2, 2];
console.log(getMajorityElement(arr));
