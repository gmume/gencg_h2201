let path;
let sun;
let end;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  path = [];
  sun = new Orbit(width / 2, height / 2, height / 6, 0.01);
  let next = sun;
  for (let i = 0; i < 3; i++) {
    next = next.addChild();
  }
  end = next;
}

function draw() {
  background(0);
  let next = sun;
  while (next != null) {
    next.update();
    next.show();
    next = next.child;
  }

  path.push(createVector(end.x, end.y));
  beginShape();
  stroke(255,0,20);
  strokeWeight(1)
  path.forEach(position => {
    vertex(position.x, position.y);
  });
  endShape();
}
