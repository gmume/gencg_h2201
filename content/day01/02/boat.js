const boat = [
   10, 20,
  195, 20,
  165, 75,
   40, 75,
];

const heighestPoint = boat[1]-(boat[2]-boat[0]);
const boatMiddle = Math.floor((boat[2]-boat[0])/2+boat[0]);
const sailBottom = Math.floor((boat[3]-boat[5])/2);

const mast = [
  boatMiddle, boat[1],
  boatMiddle, heighestPoint,
]

const sail = [
  boatMiddle, heighestPoint,
  boatMiddle, sailBottom,
  boat[0],    sailBottom,
]

function setup() {
  createCanvas(500, 500, WEBGL);
  background(200);
}

function draw() {
  noFill();
  strokeWeight(3);

  beginShape();
  vertex(boat[0], boat[1]);
  vertex(boat[2], boat[3]);
  vertex(boat[4], boat[5]);
  vertex(boat[6], boat[7]);
  endShape(CLOSE);

  line(mast[0], mast[1], mast[2], mast[3]);

  beginShape();
  vertex(sail[0], sail[1]);
  vertex(sail[2], sail[3]);
  vertex(sail[4], sail[5]);
  endShape(CLOSE);
}


