// let canvasWidth;
// let canvasHight;
let grid;
let cols;
let rows;
let depths;
let resolution;

function setup() {
  // canvasWidth = 1500;
  // canvasHight = 700;
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  frameRate(3);
  camera(-height*1.1, -height/1.1, width/0.6); //Nähe, Höhe, Seite
  strokeWeight(0);
  resolution = 180; //Auflösung
  cols = floor((width - (2 * resolution)) / resolution);
  rows = floor((height - (2 * resolution)) / resolution);
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
      translate(x-(width), y-(height));
      box(resolution);
      translate(-x+(width), -y+(height));
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
