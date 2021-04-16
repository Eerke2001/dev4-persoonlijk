import Vector from "./Vector.js";

class Bol {
  constructor($canvas, x, y) {
    this.$canvas = $canvas;
    this.ctx = $canvas.getContext(`2d`);
    this.location = new Vector(window.innerWidth / 2, window.innerHeight / 2);

    const randomNumX = (Math.random() * 8) - 4;
    const randomNumY = (Math.random() * 8) - 4;

    this.randomScale = (Math.random() * 10) + 10;

    const colorArray = [`#9cffbe`, `#ff85ad`, `#f4b5ff`, `#9cf3ff`, `#96b6ff`, `#ffdb63`];
    this.randomColor = colorArray[Math.floor(Math.random() * 6)]

    this.velocity = new Vector(randomNumX, randomNumY);
  }

  draw() {

    this.location.add(this.velocity);

    if (this.location.x > this.$canvas.width) {
      this.velocity.x = -Math.abs(this.velocity.x);
    }
    if (this.location.x < 0) {
      this.velocity.x = Math.abs(this.velocity.x);
    }
    if (this.location.y > this.$canvas.height) {
      this.velocity.y = -Math.abs(this.velocity.y);
    }
    if (this.location.y < 0) {
      this.velocity.y = Math.abs(this.velocity.y);
    }

    this.ctx.beginPath();
    this.ctx.fillStyle = this.randomColor;
    this.ctx.arc(this.location.x, this.location.y, this.randomScale, 0, Math.PI * 2, true);
    this.ctx.fill();
    this.ctx.closePath();
  }
}

export default Bol;
