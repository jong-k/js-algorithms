// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

function flatten(array) {
  return array.flat(Number.POSITIVE_INFINITY);
}

console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [ 1, 2, 3 ]
console.log(flatten([1, 2, [3, 4, [5, 6, [7, 8]]]])); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
