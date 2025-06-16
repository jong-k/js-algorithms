// 헬퍼 함수를 사용한 재귀 함수
function collectOddValues(arr) {
  const result = [];

  function collect(nums) {
    if (nums.length === 0) return;
    if (nums[0] % 2 !== 0) result.push(nums[0]);

    collect(nums.slice(1));
  }
  collect(arr);
  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [1, 3, 5, 7, 9]
