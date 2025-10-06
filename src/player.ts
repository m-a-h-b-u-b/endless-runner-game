/*
Endless Runner Game
-------------------
License : Apache 2.0 License
Author  : Md Mahbubur Rahman
URL     : https://m-a-h-b-u-b.github.io
GitHub  : https://github.com/m-a-h-b-u-b/endless-runner-game 
*/

export class Player {
  x: number;
  y: number;
  width: number = 30; // torso width
  height: number = 50; // torso height
  velocityY: number = 0;
  gravity: number = 0.8;
  jumpForce: number = -14;
  ground: number;
  runningStep: number = 0;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.ground = y;
  }

  jump() {
    if (this.y === this.ground) this.velocityY = this.jumpForce;
  }

  update() {
    this.y += this.velocityY;
    this.velocityY += this.gravity;
    if (this.y > this.ground) this.y = this.ground;

    // Running animation step
    this.runningStep += 0.2;
  }

  draw(ctx: CanvasRenderingContext2D) {
    const torsoColor = "#3498db"; // shirt
    const pantsColor = "#2c3e50"; // pants
    const skinColor = "#f1c27d"; // skin tone
    
    // Oscillations
    const legSwing = Math.sin(this.runningStep) * 5;
    const armSwing = Math.sin(this.runningStep) * 5;
    const jumpFactor = this.y < this.ground ? 1.5 : 1; // arms raise when jumping
    const headBob = Math.sin(this.runningStep * 2) * 2;

    // Draw legs
    ctx.fillStyle = pantsColor;
    ctx.fillRect(this.x - 5, this.y, 10, 20); // left leg
    ctx.fillRect(this.x + 15, this.y + legSwing, 10, 20); // right leg swings

    // Draw torso
    ctx.fillStyle = torsoColor;
    ctx.fillRect(this.x, this.y - this.height, this.width, this.height);

    // Draw arms
    ctx.fillStyle = skinColor;
    ctx.fillRect(this.x - 10, this.y - this.height + 10 + armSwing * jumpFactor, 10, 30); // left arm
    ctx.fillRect(this.x + this.width, this.y - this.height + 10 - armSwing * jumpFactor, 10, 30); // right arm

    // Draw head with bobbing
    ctx.fillStyle = skinColor;
    ctx.beginPath();
    ctx.arc(this.x + this.width / 2, this.y - this.height - 10 + headBob, 10, 0, Math.PI * 2);
    ctx.fill();
  }

  collidesWith(obstacle: any): boolean {
    return (
      this.x < obstacle.x + obstacle.width &&
      this.x + this.width > obstacle.x &&
      this.y - this.height < obstacle.y &&
      this.y > obstacle.y - obstacle.height
    );
  }
}
