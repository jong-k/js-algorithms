// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  // index 1부터 새로운 배열을 만들고 재귀
  return someRecursive(array.slice(1), callback);
}
