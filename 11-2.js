fs = require('fs')
fs.readFile('11-input.txt', 'utf8', function (err,data) {
	if (err) {
		return console.log(err);
	}
	findDistance(data);
});

function findDistance(input) {

	input = input.split(",");

	let x = 0;
	let y = 0;
	let z = 0;

	let distance = 0;
	let max = 0;

	for (let i in input) {
		switch(input[i]) {
			case 'n':
				y++;
				z--;
				break;
			case 'nw':
				x--;
				y++;
				break;
			case 'ne':
				x++;
				z--;
				break;
			case 's':
				y--;
				z++;
				break;
			case 'sw':
				x--;
				z++;
				break;
			case 'se':
				x++;
				y--;
				break;
		}

		distance = ( Math.abs(x) + Math.abs(y) + Math.abs(z) ) / 2;
		if ( distance > max ) {
			max = distance;
		}

	}

	// console.log("x: " + x);
	// console.log("y: " + y);
	// console.log("z: " + z);

	
	console.log("max distance " + max );

}