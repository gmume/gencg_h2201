let img;
let w;
let h;
let pixelIndex;
let r;
let g;
let b;
let avg;
let offset;

function preload() {
  img = loadImage("mela.png");
}

function setup() {
  img.resize(30, 0);
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  offset = img.width * 40 / 1.5;
  noStroke();
  strokeWeight(1);
  fill(255);
}

function draw() {
  orbitControl();
  background(0);
  w = img.width * 2;
  h = img.height * 1.3;
  img.loadPixels();
  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      pixelIndex = (i + j * img.width) * 4;
      r = img.pixels[pixelIndex + 0];
      g = img.pixels[pixelIndex + 1];
      b = img.pixels[pixelIndex + 2];
      avg = (r + g + b) / 25;

      push();
      translate((i * w + w * 0.5) - offset, (j * h + h * 0.5) - offset *2, - width * 2);
      sphere(avg);
      pop();
    }
  }
}
