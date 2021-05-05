const countUniqueValues = (arr) => {
  if (!arr.length) {
    return 0;
  }

  let left = 0;
  let right = 1;
  //if array isn't empty it has at least one unique value
  let counter = 1;

  while (right < arr.length) {
    if (arr[left] !== arr[right]) {
      counter++;
      left = right;
      right++;
    } else {
      right++;
    }
  }

  return counter;
};

console.log(countUniqueValues([-1, -1, -1, -1, 0, 1, 1, 2, 2, 3, 3, 3]));
console.log(countUniqueValues([]));
