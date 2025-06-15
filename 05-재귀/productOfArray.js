// 배열의 모든 원소 곱셈 구현
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  const popped = arr.pop();
  return popped * productOfArray(arr);
}

console.log(productOfArray([1, 2, 3, 4, 10]));
