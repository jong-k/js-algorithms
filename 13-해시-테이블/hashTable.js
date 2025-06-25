class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const charValue = key[i].charCodeAt();
      total = (total * PRIME + charValue) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) this.keyMap[index] = [];
    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) {
        this.keyMap[index][i][1] = value;
        return;
      }
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    if (!this.keyMap[index]) return undefined;
    for (const [k, val] of this.keyMap[index]) {
      if (k === key) return val;
    }
    return undefined;
  }

  keys() {
    const keys = [];
    // bucket: index에 위치한 배열
    for (const bucket of this.keyMap) {
      if (bucket) {
        for (const [k, val] of bucket) {
          if (!keys.includes(k)) {
            keys.push(k);
          }
        }
      }
    }
    return keys;
  }

  values() {
    const values = [];
    for (const bucket of this.keyMap) {
      if (bucket) {
        for (const [k, val] of bucket) {
          if (!values.includes(val)) {
            values.push(val);
          }
        }
      }
    }
    return values;
  }
}

const ht = new HashTable();
ht.set("hello", "world");
ht.set("goodbye", "everyone");
console.log(ht.keyMap);
