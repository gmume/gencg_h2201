let cam;
let resolution = 4;
let pixelIndex;
let r;
let g;
let b;
let avg;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(20);
  cam = createCapture(VIDEO);
  cam.hide();
  noStroke();
  fill(255);
}

function draw() {
  background(0);
  cam.loadPixels();
  for (let i = 0; i < cam.width; i += resolution) {
    for (let j = 0; j < cam.height; j += resolution) {
      pixelIndex = (i + j * cam.width) * 4;
      r = cam.pixels[pixelIndex + 0];
      g = cam.pixels[pixelIndex + 1];
      b = cam.pixels[pixelIndex + 2];
      avg = (r + g + b) / 3;
      circle(i * resolution + resolution / 2, j * resolution + resolution / 2, map(avg, 0, 255, 0, resolution));
    }
  }
}
