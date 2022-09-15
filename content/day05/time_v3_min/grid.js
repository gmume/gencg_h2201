const cols = 10;
const rows = 6;
let grid;
const resolution = 160;
let flagSec;
let flagMin;
let time;
let secCounter;
let resetSec;
let minCounter;
// let resetMin;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  frameRate(12);
  angleMode(DEGREES);
  strokeWeight(0);
  colorMode(HSB, 100);

  flagSec = "opaque";
  flagMin = "green";
  grid = make2DArray(cols, rows);
  time = Date.now();
  secCounter = 0;
  resetSec = 60;
  minCounter = 0;
  // resetMin = 60;
}

function draw() {
  clear();
  background(0);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = (i - (cols / 2)) * resolution;
      let y = (j - (rows / 2)) * resolution;
      setSeconds(i, j);
      strokeWeight(1);
      translate(x, y);
      push();
      stroke(40);

      switch (grid[i][j][0]) {
        case "transparent":
          if (grid[i][j][1] == "green") {
            fill(20, 100, 100, 5);
          } else {
            fill(0, 100, 100, 5);
          }
          box(resolution / 1.3);
          break;

        default:
          if (grid[i][j][1] == "green") {
            fill(20, 100, 75, 100);
          } else {
            fill(0, 100, 100, 100);
          }

          box(resolution / 1.3);
          break;
      }

      pop();
      translate(-x, -y);
      date = new Date();
    }
  }
}

function setSeconds(i, j) {
  if (secCounter != 60) {
    if (Date.now() - time >= 1000 && grid[i][j][0] == "opaque") {
      time = Date.now();
      secCounter += 1;
      grid[i][j][0] = "transparent";
    }
  } else {
    resetSec -= 1;
    grid[i][j][0] = "opaque";
    if (resetSec == 0) {
      if (minCounter != 60) {
        let minSet = false;
        let i = 0;
        let j = 0;

        while (minSet == false) {
          if (grid[i][j][1] == "green") {
            grid[i][j][1] = "red";
            minSet = true;
          } else if (j < rows.length) {
            j += 1;
          } else {
            i += 1;
          }
        }
      }

      secCounter = 0;
      resetSec = 60;
      minCounter += 1;
    }
  }
}

function make2DArray(cols, rows) {
  let arr = new Array(cols);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = new Array(2);
      arr[i][j][0] = flagSec;
      arr[i][j][1] = flagMin;
    }
  }
  return arr;
}
