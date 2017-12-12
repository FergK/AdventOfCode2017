fs = require('fs')
fs.readFile('09-input.txt', 'utf8', function (err,data) {
	if (err) {
		return console.log(err);
	}
	findScore(data);
});

function findScore(input) {

	let score = 0;
	let level = 0;
	let pos = 0;
	let inGarbage = false;

	while (pos < input.length) {
		switch (input[pos]) {
			case '!':
				pos++;
				break;
			case '<':
				inGarbage = true;
				break;
			case '>':
				inGarbage = false;
				break;
			case '{':
				if (!inGarbage) {
					level++;
					score += level;
				}
				break;
			case '}':
				if (!inGarbage) {
					level--;
				}
				break;
		}

		pos++;
	}

	console.log("Final score: " + score);

}