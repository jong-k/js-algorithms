// 시간복잡도 O(n), 공간복잡도 O(n)으로 해결
const findPair = (nums, n) => {
  const map1 = new Map();
  for (const num of nums) {
    if (map1.has(num + n) || map1.has(num - n)) return true;
    map1.set(num, true); // 아무 값이나 지정해도 상관없음 -> map1.has 로 프로퍼티 존재 여부 탐지하므로
  }
  return false;
};

/* test cases
findPair([6,1,4,10,2,4], 2) // true
findPair([8,6,2,4,1,0,2,5,13],1) // true
findPair([4,-2,3,10],-6) // true
findPair([6,1,4,10,2,4], 22) // false
findPair([], 0) // false
findPair([5,5], 0) // true
findPair([-4,4], -8) // true
findPair([-4,4], 8) // true
findPair([1,3,4,6],-2) // true
findPair([0,1,3,4,6],-2) // true
*/

console.log(findPair([6, 1, 4, 10, 2, 4], 2));
console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1));
console.log(findPair([4, -2, 3, 10], -6));
console.log(findPair([6, 1, 4, 10, 2, 4], 22));
console.log(findPair([], 0));
console.log(findPair([5, 5], 0));
console.log(findPair([-4, 4], -8));
console.log(findPair([-4, 4], 8));
console.log(findPair([1, 3, 4, 6], -2));
console.log(findPair([0, 1, 3, 4, 6], -2));

// 배열 오름차순 정렬하면 이진탐색으로 해결 가능할 듯
// 시간복잡도 O(n log n), 공간복잡도 O(1)
