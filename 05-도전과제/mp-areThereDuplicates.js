// 중복되는 값들이 있으면 true, 없으면 false
// Restriction: Time - O(N) / Space - O(N)
// Bonus: Time - O(N logN) / Space - O(1)
// Frequency Counter 또는 Multiple Pointers 중 어느것이든 사용 가능
// areThereDuplicates(1, 2, 3)  // false
// areThereDuplicates(1 ,2, 2)  // true
// areThereDuplicates('a', 'b', 'c', 'a')  // true

// multiple pointers 패턴 사용
// 아래 코드가 실패한 이유..
// frequency counter 패턴은 갯수를 카운트하기 때문에
// 정렬 안돼도 되나,
// 투포인터 패턴은 정렬이 꼭 필요함 (붙은 2개 원소를 비교하기 때문에)
function areThereDuplicates(...args) {
  let left = 0;
  let right = 1;
  while (right < args.length) {
    if (args[left] === args[right]) {
      right++;
      return true;
    }
    left = right;
    right++;
  }
  return false;
}

console.log(areThereDuplicates(123, 312, 333, 333, 332)); // false
