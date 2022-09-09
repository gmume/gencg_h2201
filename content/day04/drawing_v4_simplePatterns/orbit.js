class Orbit {
  constructor(x, y, r, speed, parent) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.speed = speed;
    this.angle = 0;
    this.parent = parent;
    this.child;
  }

  addChild() {
    let newR = this.r / 3;
    let newX = this.x + this.r + newR; //+ newR could also be - newR
    let newY = this.y;
    this.child = new Orbit(newX, newY, newR, -3*this.speed, this);
    return this.child;
  }

  update() {
    if (this.parent != null) {
      this.angle = this.angle + this.speed;
      let rsum = this.r + this.parent.r;
      this.x = this.parent.x + rsum * cos(this.angle);
      this.y = this.parent.y + rsum * sin(this.angle);
    }
  }

  show() {
    stroke(255, 100);
    strokeWeight(1);
    noFill();
    circle(this.x, this.y, this.r * 2);
  }
}
