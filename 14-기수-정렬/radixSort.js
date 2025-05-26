function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, nums[i]);
  }
  return maxDigits;
}

const nums = [23, 345, 5467, 12, 2345, 9852];
function radixSort(arr) {
  const maxDigitCount = mostDigits(arr);
  for (let i = 0; i < maxDigitCount; i++) {
    // 버켓 만들기 ([] 10개를 원소로 갖는 2차원 배열)
    const digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      digitBuckets[getDigit(arr[j], i)].push(arr[j]);
    }
    arr = [].concat(...digitBuckets); // 아래에서 해설
  }
  return arr;
}
console.log(radixSort(nums)); // [ 12, 23, 345, 2345, 5467, 9852 ]

// 2차원 배열을 스프레드 연산자로 전개해서 concat 하면 1차원 배열로 예쁘게 붙음
// [].concat(...[[14, 15], [16, 17]];
// -> [].concat([14,15],[16,17]); // [14,15,16,17];
