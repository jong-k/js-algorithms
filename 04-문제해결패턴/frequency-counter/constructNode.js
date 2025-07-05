function constructNote(message, letters) {
  const frequencyL = {};
  const frequencyM = {};

  for (let i = 0; i < letters.length; i++) {
    frequencyL[letters[i]] = ++frequencyL[letters[i]] || 1;
  }

  for (let i = 0; i < message.length; i++) {
    frequencyM[message[i]] = ++frequencyM[message[i]] || 1;
  }

  for (let k in frequencyM) {
    if (!frequencyL[k]) return false;
    if (frequencyM[k] > frequencyL[k]) return false;
  }

  return true;
}

// test cases
console.log(constructNote("hello", "hello world")); // true
console.log(constructNote("hello", "world")); // false
console.log(constructNote("hello", "helloo")); // true
console.log(constructNote("hello", "he llo")); // true
