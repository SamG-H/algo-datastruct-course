const binarySearch = (arr, val) => {
	let start = 0;
	let end = arr.length - 1;
	let middle = Math.floor((start + end) / 2);

	while (start <= end) {
		if (arr[middle] === val) return middle;
		if (arr[middle] < val) start = middle + 1;
		else end = middle - 1;
		middle = Math.floor((start + end) / 2);
	}
	return -1;
}
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//            S           M              E
//                           S     M     E 
//                           B  E
//                              A
console.log(binarySearch(nums, 5));
console.log(binarySearch(nums, 6));
console.log(binarySearch(nums, 110));
console.log(binarySearch(nums, 1));
