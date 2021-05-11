//add all numbers from 0 to specified number
function recursiveRange(num) {
	if(num === 1) return 1;
	return num + recursiveRange(num - 1);
}

console.log(recursiveRange(1))
console.log(recursiveRange(2))
console.log(recursiveRange(6))
