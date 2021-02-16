export default class Brick {

	constructor(game, position) {

		this.game = game;

		this.image = document.getElementById('img_brick');
		this.position = position;
		this.width = 48;
		this.height = 22;
	}

	update() {}

	draw(ctx) {
		ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
	}
}