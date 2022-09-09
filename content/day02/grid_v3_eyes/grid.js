let canvasWidth;
let canvasHight;
let grid;
let cols;
let rows;
let depths;
let resolution;

var img;

function preload() {
  img = loadImage('eyeball.png');
}

function setup() {
  canvasWidth = 700;
  canvasHight = 400;
  
  createCanvas(canvasWidth, canvasHight, WEBGL);
  frameRate(12);
  strokeWeight(0);
  colorMode(HSB, 100);
  resolution = 60; //Auflösung
  cols = floor((canvasWidth - (2 * resolution)) / resolution);
  rows = floor((canvasHight - (2 * resolution)) / resolution);
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
 
      rotateY(millis()/700);
      rotateX(millis()/700);
      texture(img);
      sphere(resolution/3);
      pop();
      
      push();
      rotateX(millis()/700);
      rotateY(millis()/700);
      stroke(40);
      fill(20, 100, 100, 5);
      box(resolution/1.2);
      pop();
      translate(-x, -y);
    }
  }
}

function make2DArray(cols, rows) {
  let arr = new Array(cols);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}
