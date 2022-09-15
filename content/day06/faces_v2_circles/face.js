let img;
let resolution;
let pixelIndex;
let r;
let g;
let b;
let avg;

function preload() {
  img = loadImage("mela.png");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noLoop();
  background(0);
  stroke(255);
  strokeWeight(1);
  fill(255);
  img.resize(60, 0);
  img.loadPixels();
  resolution = height / img.height;
}

function draw() {
  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      pixelIndex = (i + j * img.width) * 4;
      r = img.pixels[pixelIndex + 0];
      g = img.pixels[pixelIndex + 1];
      b = img.pixels[pixelIndex + 2];
      avg = (r + g + b) / 20;
      circle(i * resolution + resolution / 2, j * resolution + resolution / 2, map(avg, 0, 255, 0, resolution));
    }
  }
}
