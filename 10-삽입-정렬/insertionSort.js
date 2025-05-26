// 5 3 4 2 1

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const picked = arr[i];
    for (let j = 0; j < i; j++) {
      if (picked < arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  return arr;
}

// console.log(insertionSort([5, 3, 4, 2, 1])); // [ 1, 2, 3, 4, 5 ]
console.log(insertionSort([2, 1, 9, 76, 4])); // [ 1, 2, 4, 9, 76 ]
