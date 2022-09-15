let img;
let offset;
// let counter;

function preload() {
  img = loadImage("mela.png");
}

function setup() {
  // noLoop();
  img.resize(30, 0);
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  offset = img.width * 40 / 1.5;
}

function draw() {
  orbitControl();
  background(0);

  // let w = width / img.width;
  // let h = height / img.height;
  let w = img.width * 2;
  let h = img.height * 1.3;
  img.loadPixels();
  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      const pixelIndex = (i + j * img.width) * 4;
      const r = img.pixels[pixelIndex + 0];
      const g = img.pixels[pixelIndex + 1];
      const b = img.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 25;

      noStroke();
      strokeWeight(1);
      fill(255);
      // counter += 1;
      // console.log(counter);
      push();
      translate((i * w + w * 0.5) - offset, (j * h + h * 0.5) - offset *2);
      sphere(avg);
      pop();
    }
  }
}
