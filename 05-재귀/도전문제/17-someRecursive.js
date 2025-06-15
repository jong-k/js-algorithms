// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

// 재귀 방법을 몰라서
// some 메서드를 이용

function someRecursive(array, cb) {
  // 배열의 모든 원소들 중에서 단 하나라도 callback 함수에서 true이면 some의 반환값이 true
  return array.some(cb);
}
