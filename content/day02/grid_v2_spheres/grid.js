let canvasWidth;
let canvasHight;
let grid;
let cols;
let rows;
let depths;
let resolution;

function setup() {
  canvasWidth = 1500;
  canvasHight = 700;
  
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
      stroke(40, 100, 20, 100);
      fill(20, 100, 60, 100);
 
      sphere(resolution/3);
      pop();
      
      push();
      rotateX(millis()/700);
      rotateY(millis()/700);
      stroke(40);
      fill(20, 100, 100, 12);
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
