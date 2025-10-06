/*
Endless Runner Game
-------------------
License : Apache 2.0 License
Author  : Md Mahbubur Rahman
URL     : https://m-a-h-b-u-b.github.io
GitHub  : https://github.com/m-a-h-b-u-b/endless-runner-game 
*/

export class Obstacle {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  color: string;

  constructor(x: number, y: number, width: number, height: number, speed: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.color = "#ff6b6b";
  }

  update() {
    this.x -= this.speed;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y - this.height, this.width, this.height);
  }
}
