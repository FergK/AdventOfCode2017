//                          2450
// 147  142  133  122   59  2391
// 304    5    4    2   57  2275
// 330   10    1    1   54  2105
// 351   11   23   25   26  1968 
// 362  747  806  880  931   957

var input = 361527;

// Initialize grid
var size = 100;
var area = Math.pow(size, 2);
var c = Math.floor(size / 2);
var grid = [];

for (var i = 0; i < size; i++) {
	grid[i] = [];
	for (var j = 0; j < size; j++) {
		grid[i][j] = 0;
	}
}

grid[c][c] = 1;
var covered = 1;
var direction = 0;
var i = c;
var j = c+1;
var lastFound = 1;

function setValue(grid, i, j) {
	var val = getValue(grid, i-1, j-1) + getValue(grid, i-1, j) + getValue(grid, i-1, j+1) + getValue(grid, i, j-1) + getValue(grid, i, j+1) + getValue(grid, i+1, j-1) + getValue(grid, i+1, j) + getValue(grid, i+1, j+1);
	grid[i][j] = val;
	return val
}

function getValue(grid, i, j) {
	if ((typeof grid[i] == 'undefined') || (typeof grid[i][j] == 'undefined')) {
		return 0;
	} else {
		return grid[i][j];
	}
}

while (covered < area) {

	lastFound = setValue(grid, i, j);
	covered++;

	if (grid[i][j] > input) {
		console.log("Solution Found!!! " + grid[i][j]);
		break;
	}

	if (direction == 0) { // right
		if (getValue(grid, i-1, j) == 0) {
			i--;
			direction = 1;
		} else {
			j++;
		}
	} else if (direction == 1) { // up
		if (getValue(grid, i, j-1) == 0) {
			j--;
			direction = 2;
		} else {
			i--;
		}
	} else if (direction == 2) { // left
		if (getValue(grid, i+1, j) == 0) {
			i++;
			direction = 3;
		} else {
			j--;
		}
	} else if (direction == 3) { // down
		if (getValue(grid, i, j+1) == 0) {
			j++;
			direction = 0;
		} else {
			i++;
		}
	}

}

// console.log(grid);