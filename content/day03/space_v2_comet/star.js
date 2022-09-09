class Star {
  constructor() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.prevZ = this.z;
  }

  updateStars() {
    this.z -= starSpeed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.prevZ = this.z;
    }
  }

  show() {
    fill(255);
    noStroke();

    let x = map(this.x / this.z, 0, 1, 0, width);
    let y = map(this.y / this.z, 0, 1, 0, height);

    let prevX = map(this.x / this.prevZ, 0, 1, 0, width);
    let prevY = map(this.y / this.prevZ, 0, 1, 0, height);
    this.prevZ = this.z;

    stroke(255);
    line(prevX, prevY, x, y);
  }
}
