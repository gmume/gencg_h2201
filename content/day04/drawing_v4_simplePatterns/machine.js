let path;
let sun;
let end;

function setup() {
  canvasWidth = 600;
  canvasHight = 600;
  createCanvas(canvasWidth, canvasHight);
  // colorMode(HSB, 100);

  path = [];
  sun = new Orbit(300, 300, 150, 0.01);
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

  // let r1 = 100;
  // let x1 = 300;
  // let y1 = 300;
  // circle(x1,y1,r1*2);

  path.push(createVector(end.x, end.y));

  beginShape();
  stroke(255,0,20);
  strokeWeight(1)
  path.forEach(position => {
    vertex(position.x, position.y);
  });
  endShape();
}
