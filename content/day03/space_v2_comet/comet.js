class Comet {
  constructor() {
    this.x = random(-width/2, width/2);
    this.y = random(-height/2, height/2);
    this.z = 2000;
  }

  updateComet() {
    this.z -= 1;
    if (date.getMinutes() != min) {
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.z = 2000;
    }
  }

  show() {
    fill(255);
    noStroke();

    let x = map(this.x / this.z, 0, 1, 0, width);
    let y = map(this.y / this.z, 0, 1, 0, height);
    let r = map(this.z, 0, width, 20, 0);

    ellipse(x, y, r, r);
    stroke(255);
  }
}
