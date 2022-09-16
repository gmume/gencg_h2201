let imgFront;
let imgBack;
let offsetX;
let offsetY;
const resolution = 3;
const size = resolution * 15;
const diameter = 25;
let hueFront;
let satFront;
let brightFront;
let hueBack;
let satBack;
let brightBack;
let alphaOffset;
let alphaFront = 255;
let alphaBack = 0;
let camera;
let angle = 0;
const angleOffset = 0.03;
let radius;
let cameraZ;

function preload() {
  imgFront = loadImage("harley2.png");
  imgBack = loadImage("joker2.png");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  camera = createCamera();
  frameRate(6);
  noStroke();
  alphaOffset = 255 / (90 / angleOffset);
  radius = width;
  imgFront.resize(imgFront.width / resolution, 0);
  imgBack.resize(imgBack.width / resolution, 0);
  offsetX = imgFront.width / 2;
  offsetY = imgFront.height / 2;
  imgFront.loadPixels();
  imgBack.loadPixels();
}

function draw() {
  clear();
  background(0);
  drawFront();
  drawBack();
  cameraZ = coordZ();
  camera.setPosition(coordX(), imgFront.height / 1.5, cameraZ);
  camera.lookAt(0, 0, 0);
  angle += angleOffset;
}

function drawFront() {
  for (let i = 0; i < imgFront.width; i++) {
    for (let j = 0; j < imgFront.height; j++) {
      brightFront = brightness(imgFront.get(i, j));

      if(brightFront > 10) {
        hueFront = hue(imgFront.get(i, j));
        satFront = saturation(imgFront.get(i, j));
        push();
        translate(((i - offsetX) * size), ((j - offsetY) * size), brightFront * (size / 3));
        colorMode(HSB, 360, 100, 100, 1);
        fill(hueFront, satFront / 100 * 70, brightFront, calcAlphaFront());
        sphere(diameter, 3, 3);
        pop();
      }
    }
  }
}

function drawBack() {
  for (let i = 0; i < imgBack.width; i++) {
    for (let j = 0; j < imgBack.height; j++) {
      brightBack = brightness(imgBack.get(i, j));

      if(brightBack > 10) {
        hueBack = hue(imgBack.get(i, j));
        satBack = saturation(imgBack.get(i, j));
        push();
        translate(((i - offsetX) * size), ((j - offsetY) * size), - (brightBack * (size / 3)));
        colorMode(HSB, 360, 100, 100, 1);
        fill(hueBack, satBack / 100 * 70, brightBack, calcAlphaBack());
        sphere(diameter, 3, 3);
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