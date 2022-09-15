const density = "Ñ@#W$9876543210?!abc;:+=-,._ ";
const len = density.length;
let resolution;
let charIndex;
let img;
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
  noStroke();
  fill(255);
  img.resize(40, 0);
  resolution = height / img.height;
  img.loadPixels();
}

function draw() {
  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      pixelIndex = (i + j * img.width) * 4;
      r = img.pixels[pixelIndex + 0];
      g = img.pixels[pixelIndex + 1];
      b = img.pixels[pixelIndex + 2];
      avg = (r + g + b) / 3;
      
      charIndex = floor(map(avg, 0, 255, len, 0));
      textSize(resolution);
      textAlign(CENTER, CENTER);
      text(density.charAt(charIndex), i * resolution + resolution / 2, j * resolution + resolution / 2);
    }
  }
}
