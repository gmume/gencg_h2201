const density = "Ñ@#W$9876543210?!abc;:+=-,._ ";
const len = density.length;
let charIndex;
let img;
let w;
let h;
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
  img.resize(0, height);
  w = img.width * 1.5;
  h = img.height;
  img.loadPixels();
}

function draw() {
  background(0);
  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      pixelIndex = (i + j * img.width) * 4;
      r = img.pixels[pixelIndex + 0];
      g = img.pixels[pixelIndex + 1];
      b = img.pixels[pixelIndex + 2];
      avg = (r + g + b) / 3;

      noStroke();
      fill(255);
      charIndex = floor(map(avg, 0, 255, len, 0));
      textSize(w);
      textAlign(CENTER, CENTER);
      text(density.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.5);
    }
  }
}
