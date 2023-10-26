class Linea {
  constructor() {
    this.noiseTime = random(5, 8);
    this.noiseTime2 = random(7, 10);
  }

  update() {
    this.posX = map(noise(this.noiseTime), 0, 1, 0, windowWidth);
    this.posY = map(noise(this.noiseTime + 1), 0, 1, 0, windowHeight);
    this.noiseTime += 0.001;

    this.posX2 = map(noise(this.noiseTime2), 0, 1, 0, windowWidth);
    this.posY2 = map(noise(this.noiseTime2 + 2), 0, 1, 0, windowHeight);
    this.noiseTime2 += 0.01;
  }

  display() {
    stroke(random(118, 211), random(118, 180), 255, 15);
    strokeWeight(1);
    line(this.posX, this.posY, this.posX + 25, this.posY + 50);

    strokeWeight(1);
    stroke(random(255, 135), random(248, 255), 118, 15);
    line(this.posX2, this.posY2, this.posX + 25, this.posY + 50);
  }
}