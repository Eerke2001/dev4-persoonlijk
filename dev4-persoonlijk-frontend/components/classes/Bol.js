import Vector from "./Vector.js";

class Bol {
  constructor($canvas, x, y) {
    this.$canvas = $canvas;
    this.ctx = $canvas.getContext(`2d`);
    this.location = new Vector(x, y);
    this.velocity = new Vector(1, 3.3);
  }
  draw() {
    this.location.add(this.velocity);

    if(this.location.x > this.$canvas.width) {
      this.velocity.x = -Math.abs(this.velocity.x);
    }
    if(this.location.x < 0) {
      this.velocity.x = Math.abs(this.velocity.x);
    }
    if(this.location.y > this.$canvas.height) {
      this.velocity.y = -Math.abs(this.velocity.y);
    }
    if(this.location.y < 0) {
      this.velocity.y = Math.abs(this.velocity.y);
    }

    this.ctx.beginPath();
    this.ctx.fillStyle = `red`;
    this.ctx.arc(this.location.x, this.location.y, 16, 0, Math.PI*2, true);
    this.ctx.fill();
    this.ctx.closePath();
  }
}

export default Bol;
