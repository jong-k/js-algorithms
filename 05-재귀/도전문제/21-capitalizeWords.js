// 문자열이 원소인 배열이 주어지고, 모든 원소가 대문자화한 배열을 리턴한다
// 배열에서 pop 진행 후 재귀 호출
// 원소가 1개 남았을 때 대문자화하고 임시배열에 push -> 반복

// ['apple', 'banana', 'cherry', 'durian'];

const capitalizeWords = (arr) => {
  // 'apple' 만 남으면 ['APPLE'] 을 리턴
  if (arr.length === 1) return [arr[0].toUpperCase()];
  // 주어진 배열에서 pop하면서 재귀 호출
  const res = capitalizeWords(arr.slice(0, -1)); // 첫 번째 할당 : ['APPLE']
  // slice(arr.length - 1) 을 통해 배열 맨 마지막 원소만 남은 배열 추출하고
  // 대문자화하여 res에 push
  res.push(arr.slice(arr.length - 1)[0].toUpperCase());
  // 첫 번째 리턴 : ['APPLE', 'BANANA']
  return res;
};
