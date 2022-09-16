let imgFront;
let imgBack;
let offsetX;
let offsetY;
const resolution = 2;
const size = resolution * 15;
const diameter = 25;
let bright;
let alphaOffset;
let alphaFront;
let alphaBack;
let camera;
let angle;
const angleOffset = 0.05;
let radius;
let cameraZ;

function preload() {
  imgFront = loadImage("harley2.png");
  imgBack = loadImage("joker2.png");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  camera = createCamera();
  frameRate(5);
  noStroke();
  alphaFront = 255;
  alphaBack = 0;
  alphaOffset = 255 / (90 / angleOffset);
  console.log(alphaOffset);
  console.log(alphaFront - alphaOffset);
  angle = 0;
  radius = width;
  imgFront.resize(imgFront.width / resolution, 0);
  imgBack.resize(imgBack.width / resolution, 0);
  offsetX = imgFront.width / 2;
  offsetY = imgFront.height / 2;
  imgFront.loadPixels();
  imgBack.loadPixels();
  colorMode(HSB, 360, 100, 100, 1); 
  colorMode(RGB);
}

function draw() {
  background(0);
  drawFront();
  drawBack();
  cameraZ = coordZ();
  camera.setPosition(coordX(), 0, cameraZ);
  camera.lookAt(0, 0, 0);
  angle += angleOffset;
}

function drawFront() {
  for (let i = 0; i < imgFront.width; i++) {
    for (let j = 0; j < imgFront.height; j++) {
      bright = brightness(imgFront.get(i, j));
      if(bright > 10) {
        push();
        translate(((i - offsetX) * size), ((j - offsetY) * size), bright * (size / 3));
        fill(map(bright, 10, 100, 0, 255), calcAlphaFront());
        sphere(diameter, 4, 4);
        pop();
      }
    }
  }
}

function drawBack() {
  for (let i = 0; i < imgBack.width; i++) {
    for (let j = 0; j < imgBack.height; j++) {
      bright = brightness(imgBack.get(i, j));
      if(bright > 10) {
        push();
        translate(((i - offsetX) * size), ((j - offsetY) * size), - (bright * (size / 3)));
        fill(map(bright, 10, 100, 0, 255), calcAlphaBack());
        sphere(diameter, 4, 4);
        pop();
      }
    }
  }
}

function calcAlphaFront() {
  return map(cameraZ, - width, width, 0, 255);
}

function calcAlphaBack() {
  return map(cameraZ, width, - width, 0, 255);
}

function coordX() {
  return radius * sin(angle);
}

function coordZ() {
  return radius * cos(angle);
}