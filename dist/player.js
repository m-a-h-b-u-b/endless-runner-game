export class Player {
    constructor(x, y) {
        this.width = 30; // torso width
        this.height = 50; // torso height
        this.velocityY = 0;
        this.gravity = 0.8;
        this.jumpForce = -14;
        this.runningStep = 0;
        this.x = x;
        this.y = y;
        this.ground = y;
    }
    jump() {
        if (this.y === this.ground)
            this.velocityY = this.jumpForce;
    }
    update() {
        this.y += this.velocityY;
        this.velocityY += this.gravity;
        if (this.y > this.ground)
            this.y = this.ground;
        // Running animation step
        this.runningStep += 0.2;
    }
    draw(ctx) {
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
    collidesWith(obstacle) {
        return (this.x < obstacle.x + obstacle.width &&
            this.x + this.width > obstacle.x &&
            this.y - this.height < obstacle.y &&
            this.y > obstacle.y - obstacle.height);
    }
}
