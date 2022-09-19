let grid;
let cols;
let rows;
let depths;
let resolution;

let img;

function preload() {
  img = loadImage('eyeball.png');
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  frameRate(12);
  strokeWeight(0);
  colorMode(HSB, 100);
  resolution = width / 14;
  cols = floor((width - (2 * resolution)) / resolution);

if(floor((height - (2 * resolution)) / resolution) <= 7) {
  rows = floor((height - (2 * resolution)) / resolution);
} else {
  rows = 8;
}
  grid = make2DArray(cols, rows);
}

function draw() {
  clear();
  rotateX(PI);
  background(0);
  orbitControl();
  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = (i-(cols/2)) * resolution;
      let y = (j-(rows/2)) * resolution;
      
      strokeWeight(1);
      translate(x, y);
      
      push();
      noStroke();
      fill(60, 4, 100, 100);
      sphere(resolution/3.1);
 
      randomRotate();
      texture(img);
      sphere(resolution/3);
      pop();
      
      push();
      rotateX(millis()/700);
      rotateY(millis()/700);
      rotateZ(millis()/700);
      stroke(40);
      fill(20, 100, 100, 5);
      box(resolution/1.2);
      pop();
      translate(-x, -y);
    }
  }
}

function randomRotate() {
  let choice = random([0, 1]);
  if(choice == 0) {
    rotateY(millis()/700);
    rotateX(millis()/700);
  } else {
    rotateX(millis()/700);
    rotateY(millis()/700);
  }
}

function make2DArray(cols, rows) {
  let arr = new Array(cols);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}
