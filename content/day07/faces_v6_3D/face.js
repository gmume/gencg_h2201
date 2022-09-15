let img;

let offset;

function preload() {
  img = loadImage("mela.png");
}

function setup() {
  img.resize(150, 0);
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  noStroke();
  strokeWeight(1);
  offset = window.innerWidth/4;
  camera(0, 0, offset * 4);
}

function draw() {
  orbitControl();
  background(0);

  let w = height / img.width;
  let h = height / img.height * 1.5;
  img.loadPixels();
  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      const pixelIndex = (i + j * img.width) * 4;
      const r = img.pixels[pixelIndex + 0];
      const g = img.pixels[pixelIndex + 1];
      const b = img.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 60;
      
      fill(255);
      push();
      translate((i * w + w * 0.5) - offset, (j * h + h * 0.5) - offset * 2, avg * 80);
      sphere(avg, 8, 8);
      pop();
    }
  }
}
