// 중복되는 값들이 있으면 true, 없으면 false
// Restriction: Time - O(N) / Space - O(N)
// Bonus: Time - O(N logN) / Space - O(1)
// Frequency Counter 또는 Multiple Pointers 중 어느것이든 사용 가능
// areThereDuplicates(1, 2, 3)  // false
// areThereDuplicates(1 ,2, 2)  // true
// areThereDuplicates('a', 'b', 'c', 'a')  // true

// frequency counter 패턴 사용
function areThereDuplicates(...args) {
  const obj = {};
  let check = false;
  for (const el of args) {
    obj[el] = (obj[el] || 0) + 1;
    if (obj[el] > 1) check = true;
  }
  return check;
}

console.log(areThereDuplicates(1233, 3121, 3333)); // false
