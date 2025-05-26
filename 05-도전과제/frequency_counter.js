// 2개의 자연수가 주어졌을 때, 이 숫자들의 각 자릿수들의 등장 빈도가 같은지 확인
// 시간 제한 : O(N)
// sameFrequency(182,218)  // true
// sameFrequency(217,218)  // false

// 배열로 만들어서 오름차순 정렬해서 비교할려고 했는데, sort()가 n * log n 이라 안됨
function sameFrequency(a, b) {
  if (String(a).length !== String(b).length) {
    //  .toString() 왜 안되지..
    return false;
  }
  const aCounter = {};
  const bCounter = {};

  for (const c of String(a)) {
    // let 안빼먹게 주의
    aCounter[c] = (aCounter[c] || 0) + 1; // aCounter.c 처럼 표현하면 에러
  }

  for (const c of String(b)) {
    bCounter[c] = (bCounter[c] || 0) + 1;
  }

  let result = true;
  for (const item in aCounter) {
    if (aCounter[item] !== bCounter[item]) {
      result = false; // 바로 false를 return하게끔 해도 됨
      break;
    }
  }
  return result;
}

console.log(sameFrequency(1233, 3121)); // false
