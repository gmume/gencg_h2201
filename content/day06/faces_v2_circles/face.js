const density = "Ñ@#W$9876543210?!abc;:+=-,._ ";
let img;

function preload() {
  img = loadImage("mela.png");
}

function setup() {
  noLoop();
  img.resize(50, 0);
  createCanvas(img.width * 40, img.height * 40);
}

function draw() {
  background(0);

  let w = width / img.width;
  let h = height / img.height;
  img.loadPixels();
  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      const pixelIndex = (i + j * img.width) * 4;
      const r = img.pixels[pixelIndex + 0];
      const g = img.pixels[pixelIndex + 1];
      const b = img.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 20;

      stroke(255);
      strokeWeight(1);
      fill(255);
      circle(i * w + w * 0.5, j * h + h * 0.5, avg);
      console.log(i * w + w * 0.5, j * h + h * 0.5);


    }
  }
}
