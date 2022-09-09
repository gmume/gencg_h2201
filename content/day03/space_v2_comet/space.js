let date = new Date();

let stars;
let starSpeed;

let comet;
// let cometSpeed;
let min = date.getMinutes();

let planet;
let planetSpeed;

function setup() {
  createCanvas(1000, 800);
  background(0);

  stars = Array.from({ length: 200 }, () => ({ star: new Star() }));
  comet = new Comet();
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  
  drawStars();
  drawComet();
  // drawPlanet();
}

function drawStars() {
  starSpeed = map(1000, 0, width, 0, 30);
  for (let i = 0; i < stars.length; i++) {
    stars[i].star.updateStars();
    stars[i].star.show();
  }
}

function drawComet() {
  // cometSpeed = map(150, 0, width, 0, 30);
    comet.updateComet();
    comet.show();
    date = new Date();
}