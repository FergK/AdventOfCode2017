let input = `230,1,2,221,97,252,168,169,57,99,0,254,181,255,235,167`;
let list = [];
for (var i = 0; i < 256; i++) {
	list.push(i);
}

input = input.split("").map( function(r){ return r.charCodeAt(0); } );
input = input.concat([17, 31, 73, 47, 23]);

let round = 0;
let pos = 0;
let skip = 0;
let listLength = list.length;

for (var k = 0; k < 64; k++) {

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

}



let denseHash = [];
for (var i = 0; i < 16; i++) {
	var xor = list[i*16];
	for(var j = 1; j < 16; j++) {
		xor = xor ^ list[(i*16)+j];
	}
	denseHash[i] = xor;
}

denseHash = denseHash.map( function(r){
	r = r.toString(16);
	if (r.length == 1) {
		r = '0' + r;
	}
  return r;
});

denseHash = denseHash.join('');

console.log(denseHash);