var input = `4	1	15	12	0	9	9	5	5	8	7	3	14	5	12	3`;
// input = `0	2	7	0`;

input = input.split("\t").map( function(r){ return parseInt(r, 10) } );

function getMaxIndex(a) {
	let maxIndex = 0;
	for (var i = 1; i < a.length; i++) {
		if (a[i] > a[maxIndex]) {
			maxIndex = i;
		}
	}
	return maxIndex;
}

function redistribute(a, i) {
	let blocks = a[i];
	a[i] = 0;
	i++;
	while (blocks > 0) {
		a[i%a.length]++;
		i++;
		blocks--;
	}
	return a;
}

function checkIfLooped(a) {
	for (var i = 0; i < a.length-1; i++) {
		if ( arraysEqual(a[i], a[a.length-1]) ) {
			return true;
		}
	}
	return false;
}

function arraysEqual(a, b) {
	for (var i = 0; i < a.length; ++i) {
		if (a[i] !== b[i]) return false;
	}
	return true;
}

let configurations = [];
let cycles = 0;
let looped = false;
while (!looped) {
	// console.log("input:" + input);
	input = redistribute(input, getMaxIndex(input));
	// console.log("redistributed:" + input);
	configurations.push(input.slice(0));
	// console.log("configurations:");
	// console.log(configurations);
	looped = checkIfLooped(configurations);
	cycles++;
}
console.log(configurations);
console.log(cycles);