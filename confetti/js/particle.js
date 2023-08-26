import { hexToRGB, randomNumBetween } from "./utils.js";

const DEGREE_UNIT = Math.PI / 180;

export default class Particle {
  constructor(
    canvas,
    x,
    y,
    deg = 0,
    colors = [
      "#ff577f",
      "#ff884b",
      "#ffcc4b",
      "#a0ff4b",
      "#4bffad",
      "#4bcaff",
      "#4b7aff",
      "#a04bff",
      "#ff4bdc",
    ]
  ) {
    this.canvas = canvas;
    this.ctx = canvas.ctx;

    this.angle = randomNumBetween(deg - 30, deg + 30) * DEGREE_UNIT;

    this.x = x;
    this.y = y;
    this.r = randomNumBetween(30, 100);

    this.vx = this.r * Math.cos(this.angle);
    this.vy = this.r * Math.sin(this.angle);

    this.friction = 0.89;
    this.gravity = 0.1;

    this.width = 12;
    this.height = 12;

    this.opacity = 1;

    this.widthDelta = randomNumBetween(0, 360);
    this.heightDelta = randomNumBetween(0, 360);

    this.rotation = randomNumBetween(0, 360);
    this.rotationDelta = randomNumBetween(-1, 1);

    this.colors = colors;
    this.color = hexToRGB(
      this.colors[Math.floor(Math.random() * this.colors.length)]
    );
  }

  update() {
    this.vy += this.gravity;

    this.vx *= this.friction;
    this.vy *= this.friction;

    this.x += this.vx;
    this.y += this.vy;

    this.opacity -= 0.005;

    this.widthDelta += 2;
    this.heightDelta += 2;

    this.rotation += this.rotationDelta;
  }

  draw() {
    this.ctx.translate(this.x + this.width * 1.2, this.y + this.height * 1.2);
    this.ctx.rotate(this.rotation * DEGREE_UNIT);
    this.ctx.translate(-this.x - this.width * 1.2, -this.y - this.height * 1.2);

    const { r, g, b } = this.color;
    this.ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.opacity})`;
    this.ctx.fillRect(
      this.x,
      this.y,
      this.width * Math.cos(this.widthDelta * DEGREE_UNIT),
      this.height * Math.sin(this.heightDelta * DEGREE_UNIT)
    );

    this.ctx.resetTransform();
  }
}
