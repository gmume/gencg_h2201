let img;
const resolution = 2;
const size = resolution * 10;
const diameter = 5;
let bright;

function preload() {
  img = loadImage("dummy2.png");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  camera(0, 0, width);
  frameRate(4);
  noStroke();
  img.resize(img.width / resolution, 0);
  img.loadPixels();
  colorMode(HSB, 360, 100, 100, 1); 
  colorMode(RGB);
}

function draw() {
  orbitControl();
  background(0);

  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      bright = brightness(img.get(i, j));

      push();
      translate(((i - img.width / 2) * size), ((j - img.height / 2) * size), bright * size);
      fill(map(bright, 39, 100, 0, 255));
      sphere(calcDiameter(), 6, 6);
      pop();
    }
  }
}

function calcDiameter() {
  return bright / diameter;
}
