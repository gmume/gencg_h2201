class Orbit {
  constructor(x, y, r, parent) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.speed = random(0.01, 0.1);
    this.angle = 0;
    this.parent = parent;
    this.child;
  }

  addChild() {
    let newR = this.r * 0.5;
    let newX = this.x + this.r + newR; //+ newR could also be - newR
    let newY = this.y;
    this.child = new Orbit(newX, newY, newR, this);
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
    stroke(255);
    strokeWeight(2);
    noFill();
    circle(this.x, this.y, this.r * 2);
  }
}
