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
  frameRate(3);
  camera(-canvasHight*1.1, -canvasHight/1.1, canvasWidth/0.6); //Nähe, Höhe, Seite
  strokeWeight(0);
  resolution = 60; //Auflösung
  cols = floor((canvasWidth - (2 * resolution)) / resolution);
  rows = floor((canvasHight - (2 * resolution)) / resolution);
  grid = make2DArray(cols, rows);
}

function draw() {
  clear();
  background(0);
  orbitControl();
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;
      stroke(200);
      strokeWeight(1);
      translate(x-(canvasWidth), y-(canvasHight));
      box(resolution);
      translate(-x+(canvasWidth), -y+(canvasHight));
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
