let input = `230,1,2,221,97,252,168,169,57,99,0,254,181,255,235,167`;
let list = [];
for (var i = 0; i < 256; i++) {
	list.push(i);
}

input = input.split(",").map( function(r){ return parseInt(r, 10) } );

let pos = 0;
let skip = 0;
let listLength = list.length;

for (var i = 0; i < input.length; i++) {
	let length = input[i];
	let sublist = [];

	for(var j = 0; j < length; j++) {
		sublist[j] = list[(j+pos) % listLength];
	}

	sublist.reverse();

	for(var j = 0; j < length; j++) {
		list[(j+pos) % listLength] = sublist[j];
	}

	pos += length + skip;
	skip++;

}

console.log("Result of multiplying first two numbers: " + (list[0] * list[1]));