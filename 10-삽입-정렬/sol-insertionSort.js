const test = [45, 12, 85, 32, 89, 39, 69, 44, 42, 1, 6, 8];

const insertionSort = (arr) => {
  let temp;
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  console.log(arr);
};

insertionSort(test); // [1, 6, 8, 12, 32, 39, 42, 44, 45, 69, 85, 89]
