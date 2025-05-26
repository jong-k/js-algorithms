const hash = (key, arrayLen) => {
  let total = 0;
  for (const char of key) {
    const value = char.charCodeAt() - 96;
    total = (total + value) % arrayLen;
  }
  return total;
};

console.log(hash("pink", 10)); // 0
console.log(hash("orangered", 10)); // 7

// 이 해시 함수는 str에만 작용한다
// 상수시간이 아니다 -> key length에 비례하는 O(N)
// random성이 떨어져서 데이터가 뭉치기 쉬움 (모듈러 10이기 떄문..)
