let noiseTime = 5;
let noiseTime2 = 7;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  let posX = map(noise(noiseTime), 0, 1, 0, windowWidth);
  let posY = map(noise(noiseTime + 1), 0, 1, 0, windowHeight);

  let posX2 = map(noise(noiseTime2), 0, 1, 0, windowWidth);
  let posY2 = map(noise(noiseTime2 + 1), 0, 1, 0, windowHeight);

  noiseTime += 0.006;
  noiseTime2 += 0.003;

  //fill(150);
  //noStroke();
  stroke(random(118, 211), random(118, 180), 255, 85);
  strokeWeight(7);
  line(posX, posY, posX + 25, posY + 50);

  stroke(random(255, 135), random(248, 255), 118);
  line(posX2, posY2, posX + 25, posY + 50);
}
