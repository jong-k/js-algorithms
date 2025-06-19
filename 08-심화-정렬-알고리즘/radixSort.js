function radixSort(arr) {
  const maxDigitCount = mostDigits(arr);

  for (let i = 0; i < maxDigitCount; i++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < arr.length; j++) {
      const digit = getDigit(arr[j], i);
      digitBuckets[digit].push(arr[j]);
    }
    arr = [].concat(...digitBuckets);
  }

  return arr;
}

// 숫자로부터 자릿수를 추출하는 함수
function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// naive ver.
// function getDigit(num, place) {
//   const stringifiedNum = num.toString();
//   const len = stringifiedNum.length;
//   return place >= len ? 0 : stringifiedNum[[len - place - 1]];
// }

// 자릿수의 개수를 세는 함수
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// 배열에서 가장 큰 숫자의 자릿수를 찾는 함수
function mostDigits(arr) {
  const digitsArray = arr.map((num) => digitCount(num));
  return Math.max(...digitsArray);
}

// test cases
console.log(radixSort([23, 345, 5467, 12, 9, 1012])); // [9, 12, 23, 345, 5467, 1012]
