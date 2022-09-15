let img;
const resolution = 2;
const size = resolution * 10;
const diameter = 20;
let bright;
let sat;

function preload() {
  img = loadImage("dummy2.png");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  camera(0, 0, width);
  frameRate(4);
  noStroke();
  img.resize(img.width / resolution, 0);
  img.loadPixels();
  colorMode(HSB, 100, 100, 100); 
  
  img.updatePixels();
  // colorMode(RGB);
}

function draw() {
  orbitControl();
  background(0);

  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      bright = brightness(img.get(i, j));
      sat = saturation(img.get(i, j));
      console.log(sat);

      push();
      translate(((i - img.width / 2) * size), ((j - img.height / 2) * size), bright * size);
      // colorMode(HSB);
      fill(255, map(sat, 125, 250, 0, 100), map(bright, 39, 100, 0, 100));
      sphere(diameter, 6, 6);
      pop();
    }
  }
}

// function calcDiameter() {
//   return bright / diameter;
// }
