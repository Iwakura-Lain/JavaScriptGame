export default class Paddle {
  constructor(gameWidth, gameHeight) {
    this.width = 120;
    this.height = 20;

    this.maxSpeed = 6;
    this.speed = 0;

    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 5
    };
  }

  moveLeft(){
    this.speed = -this.maxSpeed;
  }
  moveRight(){
    this.speed = this.maxSpeed;
  }

  stop(){
    this.speed = 0;
  }

  draw(ctx) {
    ctx.fillStyle = "#566573";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {

    this.position.x += this.speed;
    if(this.position.x < 0) this.position.x = 0;
    if(this.position.x > 500 - this.width) this.position.x = 500 - this.width;

  }
}
