// arrayLen은 아웃풋의 길이를 제한하는 역할
const hash = (key, arrayLen) => {
  let total = 0;
  const WEIRD_PRIME = 31; // 해시 함수는 대부분 소수를 이용 (충돌 가능성 감소)
  // 100자 넘기진 않지만 빠르게 하기 위해 100 설정
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    const char = key[i];
    const value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen; // 예) 10으로 나누면 0~9
  }
  return total;
};

console.log(hash("orangered", 10));

// 소수를 활용해 충돌을 조금이나마 줄임!
