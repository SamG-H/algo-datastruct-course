const findLongestSubstring = (str) => {
  if (str.length === 0) {
    return 0;
  }

  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    longest = Math.max(longest, i - start + 1);

    seen[char] = i + 1;
  }
  return longest;
};

console.log(findLongestSubstring("sas"));
