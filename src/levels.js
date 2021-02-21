import Brick from '/src/brick.js';

export function buildLevel(game, level){
	let bricks = [];

	level.forEach((row, RowIndex) => {
		console.log(row, RowIndex);
		row.forEach((brick, brickIndex) => {
			if(brick === 1) {
				let position = {
					x: 50 * brickIndex, y: 50 + 24 * RowIndex
				};
				bricks.push(new Brick(game, position));
			}
		});
	});
	return bricks;
}

export const level1 = [

[0, 0, 0, 0, 0, 0, 0, 1, 0, 0]

];

export const level2 = [

[1, 1, 0, 1, 0, 1, 0, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 0, 1, 0, 1, 0, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

];