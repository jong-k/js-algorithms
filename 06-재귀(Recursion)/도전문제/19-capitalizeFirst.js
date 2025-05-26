// solution과 다른점
// 문자열에 substring 함수 대신 slice 사용
// 배열 마지막 원소를 arr[arr.length - 1] 로 간단하게 추출

function capitalizeFirst(arr) {
  if (arr.length === 1) {
    return [arr[0][0].toUpperCase() + arr[0].slice(1)];
  }
  const res = capitalizeFirst(arr.slice(0, -1));
  const string =
    arr[arr.length - 1][0].toUpperCase() + arr[arr.length - 1].slice(1);
  res.push(string);
  return res;
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
