function safelyGet(obj, path) {
  /* 내 코드
  결과는 동일
  const pathList = path.split(".");
  let result;

  for (const pathName of pathList) {
    result = obj[pathName] ? obj[pathName] : undefined;
    if (result) obj = obj[pathName];
  }

  return result;
  */

  /* 모범 답안
  obj 재할당 필요 없이 current에 obj 복사해서 메모리 덜 소요
  */
  const properties = path.split(".");
  let current = obj;

  for (const property of properties) {
    if (current === undefined) {
      return undefined;
    }
    current = current[property];
  }

  return current;
}

/* repository가 undefined인 경우 */
const object1 = {
  repository: undefined,
};

/* repository의 readme가 undefined인 경우 */
const object2 = {
  repository: {
    readme: undefined,
  },
};

/** repository.readme 모두가 존재하는 경우 */
const object3 = {
  repository: {
    readme: {
      extension: "md",
      content: "금융을 쉽고 간편하게",
    },
  },
};

console.log(safelyGet(object1, "repository.readme.extension")); // undefined
console.log(safelyGet(object1, "repository.readme")); // undefined
console.log(safelyGet(object1, "repository")); // undefined
console.log(safelyGet(object2, "repository.readme.extension")); // undefined
console.log(safelyGet(object2, "repository.readme")); // undefined
console.log(safelyGet(object2, "repository")); // { readme: undefined }
console.log(safelyGet(object3, "repository.readme.extension")); // md
console.log(safelyGet(object3, "repository.readme")); // { extension: 'md', content: '금융을 쉽고 간편하게' }
