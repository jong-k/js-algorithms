function NaiveStringSearch(text, str) {
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (text[i + j] !== str[j]) break;
      if (j === str.length - 1) count++;
    }
  }
  return count;
}

console.log(NaiveStringSearch("wooparoopa", "oo")); // 2
