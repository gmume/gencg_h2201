let img;
let offset;
let counter;

function preload() {
  img = loadImage("mela.png");
}

function setup() {
  // noLoop();
  img.resize(20, 0);
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  // offset = (img.width * 40 / 5);
  counter = 0;
  // orbitcontrol();
}

function draw() {
  orbitControl();
  background(0);

  // let w = width / img.width;
  // let h = height / img.height;
  let w = img.width;
  let h = img.height;
  img.loadPixels();
  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      const pixelIndex = (i + j * img.width) * 4;
      const r = img.pixels[pixelIndex + 0];
      const g = img.pixels[pixelIndex + 1];
      const b = img.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 50;

      noStroke();
      strokeWeight(1);
      fill(255);
      counter += 1;
      console.log(counter);
      push();
      translate((i * w + w * 0.5) - width/2, (j * h + h * 0.5) - height/2, 0);
      sphere(
        avg,
      );
      pop();
    }
  }
}
