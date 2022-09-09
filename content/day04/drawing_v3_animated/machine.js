let path;
let sun;

function setup() {
  canvasWidth = 600;
  canvasHight = 600;
  createCanvas(canvasWidth, canvasHight);
  strokeWeight(0);
  colorMode(HSB, 100);

  path = [];
  sun = new Orbit(300, 300, 100);
  let next = sun;
  for (let i = 0; i < 3; i++) {
    next = next.addChild();
  }
}

function draw() {
  background(0);

  let next = sun;
  while (next != null) {

    
    console.log("next: ", next);
    next.update();
    console.log("next: ", next);


    next.show();
    next = next.child;
  }

  // let r1 = 100;
  // let x1 = 300;
  // let y1 = 300;
  // circle(x1,y1,r1*2);

  // let r2 = r1 * 0.5;
  // let rsum = r1 + r2;
  // let x2 = x1 + rsum * cos(angle);
  // let y2 = y1 + rsum * sin(angle);
  // circle(x2, y2, r2*2);

  // path.push(createVector(x2, y2));
  // angle += 0.1;

  // beginShape();
  // path.forEach(position => {
  //   vertex(position.x, position.y);
  // });
  // endShape();
}
