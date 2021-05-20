function stringSearch(string, pattern) {
	let matchCount = 0;
	let start = 0;
	let end = pattern.length - 1;
	let subStringStart = 0;

	while (end < string.length) {
		console.log(start, subStringStart, end);
		if (string[start] === pattern[subStringStart]) {
			if (start === end) {
				matchCount++;
				subStringStart = 0;
				end = start + pattern.length - 1;
			}
			start++;
			subStringStart++;
		} else {
			start++;
			subStringStart = 0;
			end = start + pattern.length - 1;
		}
	}

	return matchCount;
}

console.log(stringSearch("massam", "sam"));
