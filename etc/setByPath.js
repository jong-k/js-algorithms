/**
 * obj의 path 경로에 value 설정
 * 경로 중간에 객체가 없으면 빈 객체 생성
 * @param {object} obj - 원본 객체
 * @param {string} path - "a.b.c" 또는 "a" 형식
 * @param {*} value - 설정할 값
 * @returns {object} 원본 obj(변경된 상태)
 */

const setByPath = (obj, path, value) => {
  const keys = path.split(".");
  let cur = obj;
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (i === keys.length - 1) {
      cur[key] = value;
    } else {
      if (typeof cur[key] !== "object" || cur[key] === null) cur[key] = {};
      cur = cur[key];
    }
  }
  return obj;
};

const obj1 = { a: { b: { c: undefined } } };
setByPath(obj1, "a.b.c", 3);
console.log(obj1);
// { a: { b: { c: 3 } } }

const obj2 = { a: { b: { c: undefined } } };
setByPath(obj2, "a.c.d", null);
console.log(obj2);
// { a: { b: { c: undefined }, c: { d: null } } }

const obj3 = {};
setByPath(obj3, "a", 10);
console.log(obj3);
// { a: 10 }
