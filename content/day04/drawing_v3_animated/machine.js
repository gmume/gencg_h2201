let path;
let sun;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  strokeWeight(0);
  colorMode(HSB, 100);

  path = [];
  sun = new Orbit(width / 2, height / 2, height / 6);
  let next = sun;
  for (let i = 0; i < 3; i++) {
    next = next.addChild();
  }
}

function draw() {
  background(0);
  let next = sun;
  while (next != null) {
    next.update();
    next.show();
    next = next.child;
  }
}
