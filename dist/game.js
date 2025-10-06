import { Player } from './player.js';
import { Obstacle } from './obstacle.js';
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 900;
canvas.height = 450;
const player = new Player(100, 380);
const obstacles = [];
let score = 0;
let speed = 4;
// Parallax background offsets
let groundOffset = 0;
const clouds = [];
for (let i = 0; i < 5; i++) {
    clouds.push({
        x: Math.random() * canvas.width,
        y: 50 + Math.random() * 100,
        radiusX: 20 + Math.random() * 20,
        radiusY: 15 + Math.random() * 15
    });
}
function drawParallax() {
    // Sky
    const skyGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    skyGradient.addColorStop(0, "#74ebd5");
    skyGradient.addColorStop(1, "#ACB6E5");
    ctx.fillStyle = skyGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Clouds
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    for (let cloud of clouds) {
        cloud.x -= speed * 0.3;
        if (cloud.x + cloud.radiusX * 2 < 0) {
            cloud.x = canvas.width + cloud.radiusX * 2;
            cloud.y = 50 + Math.random() * 100;
            cloud.radiusX = 20 + Math.random() * 20;
            cloud.radiusY = 15 + Math.random() * 15;
        }
        ctx.beginPath();
        ctx.ellipse(cloud.x, cloud.y, cloud.radiusX, cloud.radiusY, 0, 0, Math.PI * 2);
        ctx.ellipse(cloud.x + cloud.radiusX, cloud.y, cloud.radiusX + 10, cloud.radiusY + 5, 0, 0, Math.PI * 2);
        ctx.fill();
    }
    // Ground
    groundOffset -= speed;
    ctx.fillStyle = "#7ec850";
    ctx.fillRect(groundOffset % canvas.width, canvas.height - 40, canvas.width, 40);
    ctx.fillRect((groundOffset % canvas.width) + canvas.width, canvas.height - 40, canvas.width, 40);
}
function spawnObstacle() {
    const height = Math.random() * 40 + 20;
    obstacles.push(new Obstacle(canvas.width, canvas.height - 40, 20, height, speed));
}
setInterval(spawnObstacle, 1500);
function update() {
    drawParallax();
    player.update();
    player.draw(ctx);
    obstacles.forEach((obstacle, index) => {
        obstacle.update();
        obstacle.draw(ctx);
        if (obstacle.x + obstacle.width < 0) {
            obstacles.splice(index, 1);
            score++;
            if (score % 5 === 0)
                speed += 0.5;
        }
        if (player.collidesWith(obstacle)) {
            alert('Game Over! Your score: ' + score);
            document.location.reload();
        }
    });
    ctx.fillStyle = '#2d3436';
    ctx.font = '24px "Segoe UI"';
    ctx.fillText('Score: ' + score, 20, 40);
    requestAnimationFrame(update);
}
window.addEventListener('keydown', (e) => {
    if (e.code === 'Space')
        player.jump();
});
update();
