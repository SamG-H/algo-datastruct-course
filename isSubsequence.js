function isSubsequence(substr, str) {
  if (substr.length > str.length) {
    return false;
  }

  let i = 0;
  let j = 0;

  while (j < str.length) {
    if (substr[i] === str[j]) {
      i++;
    }
    if (i === substr.length) {
      return true;
    }
    j++
  }

  return false;
}
console.log(isSubsequence("sam", "stam"));
//s, a, m
//s, t, a, m
//returns true
