function averagePair(arr, avg) {
  if (arr.length < 2) return false;

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const currentAvg = ((arr[left] + arr[right]) / 2).toFixed(1);

    if (currentAvg === avg.toFixed(1)) {
      return true;
    } else if (currentAvg < avg) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}

// test cases
console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 2, 3], 3)); // false
console.log(averagePair([1, 2, 3, 4, 5], 3)); // true
