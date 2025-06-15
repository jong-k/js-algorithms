// 짝수인 값을 수집할 변수를 만들어야 하는데.. 재귀 함수에서는 이것을 만드는 것이 불가능
// 함수 최상단에 let sum = 0; 코드가 있으면, 재귀 함수가 호출될 때 마다
// sum이 0으로 초기화되어버리기 때문

// 이에 대한 해결책으로, default parameter 사용
// sum 기본값을 0으로 설정 + 함수 호출시에 파라미터 안넣어도 됨

function nestedEvenSum(obj, sum = 0) {
  for (const key in obj) {
    if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    } else if (typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]);
    }
  }
  return sum;
}

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10
