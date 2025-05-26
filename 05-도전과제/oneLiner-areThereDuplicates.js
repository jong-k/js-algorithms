// 중복되는 값들이 있으면 true, 없으면 false
// Restriction: Time - O(N) / Space - O(N)
// Bonus: Time - O(N logN) / Space - O(1)
// Frequency Counter 또는 Multiple Pointers 중 어느것이든 사용 가능
// areThereDuplicates(1, 2, 3)  // false
// areThereDuplicates(1 ,2, 2)  // true
// areThereDuplicates('a', 'b', 'c', 'a')  // true

// Set 객체 사용
// Set 객체는 중복을 제거하고 저장한다
// Set.size 는 set 객체의 원소 수를 반환한다
function areThereDuplicates(...args) {
  return new Set(args).size !== args.length;
}

console.log(areThereDuplicates(1233, 3121, 3333, 3333)); // true
