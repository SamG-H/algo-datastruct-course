// returns the minimal length of a contiguous subarray of which the sum
// is greater than or equal to the integer passed in.
// if no subarray is found, return 0
function minSubArrayLen(arr, min) {
	// loop through array incrementing right adding each value to a sum
	// and checking if that sum >= min
	// if sum >= min then we want to set currentMin & increment left
	// if sum is NOT >= min, increment right until it hits the end 
	// and then increment left until it hits the end checking sum each time
	
	let currentMin = Infinity
	let left = 0;
	let right = 0;
	let sum = arr[0];

	while (left < arr.length) {
		if(sum >= min) {
			if (currentMin > right - left + 1) {
				currentMin = right - left + 1;
			}
			sum -= arr[left];
			left++;
		} else if (right === arr.length - 1) {
			sum -= arr[left];
			left++;
		} else {
			right++
			sum += arr[right]
		}
	}
	if (currentMin === Infinity) {
		return 0;
	}
	return currentMin;
}
const array = [3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19];
console.log("Should return 1", minSubArrayLen(array, 52));
console.log("Should return 1", minSubArrayLen([1, 2, 3], 3));
console.log("Should return 1", minSubArrayLen([3, 2, 3], 3));
console.log("Should return 2", minSubArrayLen([3, 3, 4], 7));
console.log("Should return 3", minSubArrayLen([1, 3, 3, 3, 1, 4], 9));
