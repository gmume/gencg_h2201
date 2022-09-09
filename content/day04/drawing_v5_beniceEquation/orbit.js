class Orbit {
  constructor(x, y, r, level, parent) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.level = level;
    this.speed = radians(pow(edges, level - 1)) / resolution;
    this.angle = -PI / 2;
    this.parent = parent;
    this.child;
  }

  addChild() {
    let newR = this.r / 3;
    let newX = this.x + this.r + newR;
    let newY = this.y;
    this.child = new Orbit(newX, newY, newR, this.level + 1, this);
    return this.child;
  }

  update() {
    if (this.parent != null) {
      this.angle = this.angle + this.speed;
      let rsum = this.r + this.parent.r; //+ or -
      this.x = this.parent.x + rsum * cos(this.angle);
      this.y = this.parent.y + rsum * sin(this.angle);
    }
  }

  show() {
    stroke(100, 1, 50, 7);
    strokeWeight(1);
    noFill();
    circle(this.x, this.y, this.r * 2);
  }
}
