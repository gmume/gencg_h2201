let path;
let sun;
let end;
let edges = -4; //n-1
let resolution = 10;

function setup() {
  canvasWidth = 600;
  canvasHight = 600;
  createCanvas(canvasWidth, canvasHight);
  colorMode(HSB, 100);
  path = [];
  sun = new Orbit(300, 300, 150, 0);
  let next = sun;

  for (let i = 0; i < 6; i++) {
    next = next.addChild();
  }

  end = next;
}

function draw() {
  background(0);

  for (let i = 0; i < resolution; i++) {
    let next = sun;
    while (next != null) {
      next.update();
      next.show();
      next = next.child;
    }
    path.push(createVector(end.x, end.y));
  }

  beginShape();
  stroke(0, 100, 100);
  strokeWeight(1);
  path.forEach((position) => {
    vertex(position.x, position.y);
  });
  endShape();
}