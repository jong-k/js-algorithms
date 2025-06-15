// ['car','taco','banana']
function capitalizeFirst(array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)]; // (2) [ 'Car' ] 반환
  }
  const res = capitalizeFirst(array.slice(0, -1)); // (1) length 1 될때까지 실행. (3) res에 [ 'Car' ] 할당됨.
  // (4) array = ['car','taco']
  const string =
    array.slice(array.length - 1)[0][0].toUpperCase() +
    array.slice(array.length - 1)[0].substr(1);
  // (5) string = 'Taco'
  res.push(string); // (6) res = ['Car','Taco']
  return res; // (7) ['Car','Taco'] 반환.
  // (8) 결국 capitalizeFirst(['car','taco']) 가 ['Car','Taco'] 를 반환하고
  // capitalizeFirst(['car','taco','banana'])의 res에 할당. (res = ['Car','Taco'], array = ['car','taco','banana'])
}

// 해설
// 맨 첫 번째 원소부터 맨 앞을 대문자로 만들고 임시 배열에 저장해나감
// 중간 과정에서 재귀호출을 사용하고 최종 리턴값은 임시 배열
