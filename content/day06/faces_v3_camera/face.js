let cam;
const resolution = 4;

function setup() {
  cam = createCapture(VIDEO);
  console.log(cam);
  cam.hide();
  createCanvas(cam.width*20, cam.height*25);
  console.log(cam.width, cam.height);
}

function draw() {
  background(0);

  let w = width / cam.width;
  let h = height / cam.height;
  cam.loadPixels();
  for (let i = 0; i < cam.width; i += resolution) {
    for (let j = 0; j < cam.height; j += resolution) {
      const pixelIndex = (i + j * cam.width) * 4;
      const r = cam.pixels[pixelIndex + 0];
      const g = cam.pixels[pixelIndex + 1];
      const b = cam.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 20;

      noStroke();
      fill(255);
      circle(i * w + w * 0.5, j * h + h * 0.5, avg);
    }
  }
}
