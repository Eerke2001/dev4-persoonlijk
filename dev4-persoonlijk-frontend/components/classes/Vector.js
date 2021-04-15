class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  add(v) {
    this.x += v.x;
    this.y += v.y;
  }
  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
  }
  mult(n) {
    this.x *= n;
    this.y *= n;
  }
  div(n) {
    this.x /= n;
    this.y /= n;
  }
  mag() {
    return Math.sqrt(this.x*this.x + this.y*this.y);
  }
  normalize() {
    const m = this.mag();
    if(m !== 0) {
      this.div(m);
    }
  }
  limit(max) {
    if(this.mag() > max) {
      this.normalize();
      this.mult(max);
    }
  }
}

export default Vector;
