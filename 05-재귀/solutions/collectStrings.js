function collectStrings(obj, arr = []) {
  for (const key in obj) {
    if (obj[key] && typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      arr = arr.concat(collectStrings(obj[key]));
    } else if (typeof obj[key] === "string") {
      arr.push(obj[key]);
    }
  }
  return arr;
}

// test cases
console.log(collectStrings({ a: "hello", b: 2, c: { d: "world", e: { f: "!" } } })); // [ 'hello', 'world', '!' ]
