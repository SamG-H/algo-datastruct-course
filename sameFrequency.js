function sameFrequency(num1, num2) {
  const str1 = `${num1}`;
  const str2 = `${num2}`;

  if (str1.length !== str2.length) {
    return false;
  }

  let freqCounter1 = {};
  let freqCounter2 = {};

  for (let c of str1) {
    freqCounter1[c] = (freqCounter1[c] || 0) + 1;
  }

  for (let c of str2) {
    freqCounter2[c] = (freqCounter2[c] || 0) + 1;
  }

  for (let key in str1) {
    if (freqCounter1[key] !== freqCounter2[key]) {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(1233, 3211));
