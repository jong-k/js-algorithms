/*
Taxicab Numbers(택시캡 수)
- a^3 + b^3 = c^3 + d^3 을 만족하는 양의 정수 a, b, c, d를 찾기
  - a, b, c, d는 양의 정수
  - a, b, c, d는 서로 다른 수
  - a, b, c, d는 오름차순으로 정렬되어야 함
*/

// 1000 이하의 택시캡 수 찾기
// 시간복잡도: O(N^2)

const taxicabNumbers = (limit) => {
  const results = [];
  const cubeMap = new Map();

  // a^3 + b^3 = sum 조합을 미리 계산하여 sum을 키로 하는 맵에 저장
  for (let i = 1; i <= limit; i++) {
    for (let j = i + 1; j <= limit; j++) {
      const sum = i ** 3 + j ** 3;

      if (!cubeMap.has(sum)) cubeMap.set(sum, []);
      cubeMap.get(sum).push([i, j]);
    }
  }

  // 같은 sum을 가지는 조합 쌍들 [ [ a, b ], [ c, d ] ... ] 중
  // 길이가 2인 경우에만 안겹치게 원소들 2쌍을 하나씩 결과에 넣기
  // 예: sum = 9, pairs = [ [1, 2], [3, 0] ] -> [ [1, 2, 3, 0] ]
  for (const [sum, pairs] of cubeMap) {
    if (pairs.length > 1) {
      for (let i = 0; i < pairs.length; i++) {
        for (let j = i + 1; j < pairs.length; j++) {
          const [a, b] = pairs[i];
          const [c, d] = pairs[j];

          results.push([a, b, c, d]);
        }
      }
    }
  }
  return results;
};

console.log(taxicabNumbers(1000));
