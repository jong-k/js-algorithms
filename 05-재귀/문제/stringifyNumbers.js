// 객체에 대해 값이 숫자인 프로퍼티를 문자열로 변환하는 재귀 함수
function stringifyNumbers(obj) {
  const newObj = {};

  for (const key in obj) {
    if (obj[key] && typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

// test cases
console.log(stringifyNumbers({ a: 1, b: "2", c: { d: 3, e: { f: 4 } } }));
// { a: "1", b: "2", c: { d: "3", e: { f: "4" } } }
console.log(stringifyNumbers({ x: [], y: { z: 20, w: "30" } }));
// { x: [], y: { z: "20", w: "30" } }
