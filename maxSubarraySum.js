const maxSubarraySum = (arr, subArrLen) => {
	if (arr.length < subArrLen) {
		return null;
	}
	let currentMax = 0;
	
	for (let i = 0; i < subArrLen; i++) {
		currentMax += arr[i];
	}

	let tempMax = currentMax;

	for (let i = 1; i <= arr.length - subArrLen; i++) {
		tempMax = tempMax - arr[i - 1] + arr[i + subArrLen - 1];
		if (tempMax > currentMax) {
			currentMax = tempMax;	
		}
	}

	return currentMax;
}

//console.log(maxSubarraySum([1, 2, 3, 4], 2));
// return 3 + 4 which gives max sum of subarray with length of 2
//console.log(maxSubarraySum([5, 1, 0, 6, 1, 3, 1], 3));
// returns 6 + 1 + 3
//console.log(maxSubarraySum([100, 200, 300, 400], 2));
// ([1], 2)
// returns null
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2))
