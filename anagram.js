const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let freqCounter1 = {};
  let freqCounter2 = {};

  for (let char of str1) {
    freqCounter1[char] = (freqCounter1[char] || 0) + 1;
  }
  for (let char of str2) {
    freqCounter2[char] = (freqCounter2[char] || 0) + 1;
  }
	console.log(freqCounter1)
  for (let key in freqCounter1) {
    if (freqCounter1[key] !== freqCounter2[key]) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("sam", "sa"));
console.log(isAnagram("sam", "msa"));
console.log(isAnagram("sam", "mas"));
console.log(isAnagram("", ""));
console.log(isAnagram("maitland", "ndaltaim"));
