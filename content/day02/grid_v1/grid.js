let grid;
let cols;
let rows;
let depths;
let resolution;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  frameRate(3);
  // camera(-height*1.1, -height/1.1, width/0.6); //Nähe, Höhe, Seite
  camera(0, height/4, width); //Nähe, Höhe, Seite
  strokeWeight(0);
  resolution = 180;
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
      let x = (i-(cols/2)) * resolution;
      let y = (j-(rows/2)) * resolution;
      stroke(200);
      strokeWeight(1);
      translate(x-(width / 2), y-(height / 2));
      box(resolution);
      translate(-x+(width / 2), -y+(height / 2));
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
