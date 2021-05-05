// given a sorted array of ints return if any two numbers add up to the targetAvg
const averagePair = (nums, targetAvg) => {
  if (nums.length < 2) {
    return false;
  }

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const avg = (nums[left] + nums[right]) / 2;
    if (avg === targetAvg) {
      return true;
    } else if (avg > targetAvg) {
      right--;
    } else {
      left++;
    }
  }

  return false;
};

console.log(averagePair([1, 2, 2], 2.5));
