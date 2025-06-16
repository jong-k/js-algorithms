// 헬퍼 함수가 없는 순수 재귀 함수
function collectOddValues(arr) {
  let result = [];

  if (!arr.length) return result;
  if (arr[0] % 2 !== 0) result.push(arr[0]);

  result = [...result, ...collectOddValues(arr.slice(1))];
  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [1, 3, 5, 7, 9]
