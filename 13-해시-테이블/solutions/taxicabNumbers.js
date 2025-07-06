/*
Taxicab Numbers(택시캡 수)
- a^3 + b^3 = c^3 + d^3 을 만족하는 양의 정수 a, b, c, d를 찾기
  - a, b, c, d는 양의 정수
  - a, b, c, d는 서로 다른 수
  - a, b, c, d는 오름차순으로 정렬되어야 함
*/

// 100 이하의 택시캡 수 찾기 -> 1000 찾으면 너무 느려서 100으로 제한
// 시간복잡도: O(n^4)

const taxicabNumbers = (limit) => {
  const results = [];

  for (let a = 1; a < limit; a++) {
    for (let b = a + 1; b <= limit; b++) {
      for (let c = 1; c < limit; c++) {
        for (let d = c + 1; d <= limit; d++) {
          if (
            a !== c &&
            a !== d &&
            b !== c &&
            b !== d &&
            a ** 3 + b ** 3 === c ** 3 + d ** 3
          ) {
            results.push([a, b, c, d]);
          }
        }
      }
    }
  }
  return results;
};

console.log(taxicabNumbers(100));
