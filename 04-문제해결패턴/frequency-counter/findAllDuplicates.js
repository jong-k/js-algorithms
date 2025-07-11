// O(N)으로 배열에서 원소가 2개 중복된 모든 원소 찾기
const findAllDuplicates = (nums) => {
  const counter = new Map();
  const result = [];

  for (const num of nums) {
    const frequency = counter.get(num);

    if (frequency) counter.set(num, frequency + 1);
    else counter.set(num, 1);

    if (frequency === 1) result.push(num);
  }
  return result;
};

// test cases
console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // [ 2, 3 ]
console.log(findAllDuplicates([4, 3, 2, 1, 0])); // []
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])); // [ 1, 2, 3 ]
