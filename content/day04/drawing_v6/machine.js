let pathParent1;
let pathParent2;
let pathEnd;
let sun;
let end;
const edges = 7; //
const resolution = 30; //10

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  colorMode(HSB, 100);
  pathParent1 = [];
  pathParent2 = [];
  pathEnd = [];
  sun = new Orbit(width / 2, height / 2, height / 6, 0);
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
    pathParent1.push(createVector(end.parent.parent.parent.parent.x, end.parent.parent.parent.parent.y));
    pathParent2.push(createVector(end.parent.parent.parent.x, end.parent.parent.parent.y));
    pathEnd.push(createVector(end.x, end.y));
  }
  drawPathParent1();
  drawPathParent2();
  drawPathEnd();
}

function drawPathParent1() {
  beginShape();
  stroke(30, 100, 100);
  strokeWeight(3);
  pathParent1.forEach((position) => {
    vertex(position.x, position.y);
  });
  endShape();
}

function drawPathParent2() {
  beginShape();
  stroke(50, 100, 65);
  strokeWeight(4);
  pathParent2.forEach((position) => {
    vertex(position.x, position.y);
  });
  endShape();
}

function drawPathEnd() {
  beginShape();
  stroke(10, 100, 80);
  strokeWeight(1);
  pathEnd.forEach((position) => {
    vertex(position.x, position.y);
  });
  endShape();
}
