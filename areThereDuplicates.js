const areThereDuplicates = (...arr) => {
  if (arr.length < 2) {
    return false;
  }
  let freqObj = {};

  for (const val of arr) {
    if (freqObj[val]) {
      return true;
    }
    freqObj[val] = 1;
  }

  return false;
};

console.log(areThereDuplicates(1, 2, 5, 3, 4, 5));
