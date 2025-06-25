const hash = (key, arrayLen) => {
  let total = 0;
  const PRIME = 31; // 무작위 소수로 해시 충돌 줄이기
  // key의 길이가 100을 넘더라도 속도를 위해 100회만 반복
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    const charValue = key[i].charCodeAt();
    total = (total * PRIME + charValue) % arrayLen;
  }
  return total;
};

console.log(hash("goodbye", 13));
