let img;
const size = 5;
const density = 40;
let pixelIndex;
let r;
let g;
let b;
let avg;

function preload() {
  img = loadImage("dummy2.png");
}

function setup() {
  img.resize(img.width / size, 0);
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  noStroke();
  strokeWeight(1);
  camera(0, 0, width);
}

function draw() {
  orbitControl();
  background(0);

  img.loadPixels();
  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      pixelIndex = (i + j * img.width) * 4;
      r = img.pixels[pixelIndex + 0];
      g = img.pixels[pixelIndex + 1];
      b = img.pixels[pixelIndex + 2];
      avg = (r + g + b) / (density * 3/4);
      
      push();
      translate(((i - img.width / 2) * density), ((j - img.height / 2) * density), avg * density);
      fill(map(avg, 0, 23, 0, 255));
      sphere(avg, 8, 8);
      pop();
    }
  }
}
