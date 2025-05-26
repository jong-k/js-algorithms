// 재귀 안쓰는 방법

function capitalizeFirst(arr) {
  const newArr = [];
  for (const el of arr) {
    const first = el[0].toUpperCase();
    const newWord = first + el.slice(1);
    newArr.push(newWord);
  }
  return newArr;
}

console.log(capitalizeFirst(["car", "taco", "banana"]));

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
