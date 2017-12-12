fs = require('fs')
fs.readFile('09-input.txt', 'utf8', function (err,data) {
	if (err) {
		return console.log(err);
	}
	findScore(data);
});

function findScore(input) {

	let pos = 0;
	let inGarbage = false;
	let garbageCount = 0;

	while (pos < input.length) {
		switch (input[pos]) {
			case '!':
				pos++;
				break;
			case '<':
				if (inGarbage) {
					garbageCount++;
				}
				inGarbage = true;
				break;
			case '>':
				inGarbage = false;
				break;
			default:
				if (inGarbage) {
					garbageCount++;
				}
				break;

		}

		pos++;
	}

	console.log("Final garbage count: " + garbageCount);

}