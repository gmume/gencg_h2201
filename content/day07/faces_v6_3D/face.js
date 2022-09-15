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
  img.resize(150, 0);
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  noStroke();
  fill(255);
  offset = window.innerWidth/4;
  camera(0, 0, width);
}

function draw() {
  orbitControl();
  background(0);

  w = height / img.width;
  h = height / img.height * 1.5;
  img.loadPixels();
  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      pixelIndex = (i + j * img.width) * 4;
      r = img.pixels[pixelIndex + 0];
      g = img.pixels[pixelIndex + 1];
      b = img.pixels[pixelIndex + 2];
      avg = (r + g + b) / 60;
      
      push();
      translate((i * w + w * 0.5) - offset, (j * h + h * 0.5) - offset * 2, avg * 80);
      sphere(avg, 8, 8);
      pop();
    }
  }
}
