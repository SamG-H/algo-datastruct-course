// given a number n, return the nth number of the fibonacci sequence
// the fibonacci sequence begins with 1 and 1
// the next number is the the previous two combined
// 1, 1, 2, 3, 5, 8, 13, 21, 34
const fib = (n) => {
	if (n <= 2) return 1;
	return fib(n - 1) + fib(n - 2);
}

console.log(fib(1));
console.log(fib(2));
console.log(fib(4));
console.log(fib(9));
