/**
 * obj의 path 경로에 value 설정
 * 경로 중간에 객체가 없으면 빈 객체 생성
 * @param {object} obj - 원본 객체
 * @param {string} path - "a.b.c" 또는 "a" 형식
 * @param {*} value - 설정할 값
 * @returns {object} 새로운 객체(원본 불변)
 */

const immutableSetByPath = (obj, path, value) => {
  const keys = path.split(".");
  const rootClone = { ...obj };

  let curNew = rootClone;
  let curOld = obj;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (i === keys.length - 1) {
      curNew[key] = value;
      break;
    }

    const oldChild = curOld != null ? curOld[key] : undefined;
    let nextNew;

    if (oldChild != null && typeof oldChild === "object") {
      nextNew = { ...oldChild };
    } else {
      nextNew = {};
    }

    curNew[key] = nextNew;
    curNew = nextNew;
    curOld = oldChild;
  }

  return rootClone;
};

const obj1 = { a: { b: { c: undefined } } };
const r1 = immutableSetByPath(obj1, "a.b.c", 3);
console.log(r1); // { a: { b: { c: 3 } } }
console.log(obj1); // { a: { b: { c: undefined } } }  (원본 유지)

const obj2 = { a: { b: { c: undefined } } };
const r2 = immutableSetByPath(obj2, "a.c.d", null);
console.log(r2); // { a: { b: { c: undefined }, c: { d: null } } }
console.log(obj2); // { a: { b: { c: undefined } } } (원본 유지)

const obj3 = {};
const r3 = immutableSetByPath(obj3, "a", 10);
console.log(r3); // { a: 10 }
console.log(obj3); // {}
