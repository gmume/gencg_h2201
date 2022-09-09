let canvasWidth;
let canvasHight;
let grid;
let cols;
let rows;
let depths;
let resolution;
let flag;
let degree;
const degreeDiv = 1;
let date;
let sec;
let min;
let hour;

function setup() {
  canvasWidth = 1500;
  canvasHight = 700;
  
  createCanvas(canvasWidth, canvasHight, WEBGL);
  frameRate(15);
  angleMode(DEGREES);
  strokeWeight(0);
  colorMode(HSB, 100);
  resolution = 80; //Auflösung
  cols = 10;
  rows = 6;
  flag = "start";
  grid = make2DArray(cols, rows);
  degree = 0;
  date = new Date();
  sec = date.getSeconds();
  min = date.getMinutes();
  hour = date.getHours();
}

function draw() {
  clear();
  background(0);
  orbitControl();
  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = (i-(cols/2)) * resolution;
      let y = (j-(rows/2)) * resolution;
      
      if(date.getSeconds() != sec) {
        grid[i][j] ="second";
      }
      
      strokeWeight(1);
      translate(x, y);
      push();
      stroke(40);

      console.log(grid[i][j]);
      switch (grid[i][j]) {
        case "second":
          fill(20, 100, 100, 5);
          //cylinder(resolution /1.5, resolution);
          box(resolution/1.3);
          break;

        case "rotate":
          fill(20, 100, 100, 5);
          rotatX(degreeDiv);
          //cylinder(resolution /1.5, resolution);
          box(resolution/1.3);
          degree += degreeDiv;
          break;

        case "minute":
          fill(90, 100, 100, 100);
          box(resolution/1.3);
          break;

        default:
          fill(20, 100, 75, 100);
          box(resolution/1.3);
          break;
      }

      pop();
      translate(-x, -y);
      date = new Date();
    }
  }
}

function make2DArray(cols, rows) {
  let arr = new Array(cols);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = flag;
    }
  }
  return arr;
}
