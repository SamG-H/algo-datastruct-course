function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let freqCounter1 = {};
  let freqCounter2 = {};

  for (let val of arr1) {
    freqCounter1[val] = (freqCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    freqCounter2[val] = (freqCounter2[val] || 0) + 1;
  }

  for (let key in freqCounter1) {
    if (freqCounter1[key] !== freqCounter2[key ** 2]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3, 3], [4, 1, 9, 9]));
console.log(same([1, 2, 3, 3, 4], [4, 1, 9, 9, 4]));
console.log(same([1, 2, 3, 3, 4], [16, 1, 9, 9, 4]));
console.log(same([1, 2, 3, 3, 4], [6, 1, 9, 9, 4]));
