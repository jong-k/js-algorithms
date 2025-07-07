// 헬퍼 함수를 사용하여 중첩된 객체 중 짝수들의 합 구하는 재귀 함수
// function nestedEvenSum(obj) {
//   let sum = 0;

//   function calcSum(obj) {
//     for (const key in obj) {
//       if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
//         sum += obj[key];
//       } else if (obj[key] && typeof obj[key] === "object") {
//         calcSum(obj[key]);
//       }
//     }
//   }
//   calcSum(obj);

//   return sum;
// }

// default paramerter 사용하는 버전
function nestedEvenSum(obj, sum = 0) {
  for (const key in obj) {
    if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    } else if (obj[key] && typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]);
    }
  }
  return sum;
}

// test cases
console.log(nestedEvenSum({ a: 1, b: 2, c: { d: 4, e: { f: 6 } } })); // 12
