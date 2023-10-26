class Linea {
  constructor() {
    this.noiseTime = random(5, 8);
    this.noiseTime2 = random(7, 10);
    this.colorsito = random() > 0.5 ? true : false;
    // this.osc = new p5.Oscillator("sine");
  }

  update() {
    this.posX = map(noise(this.noiseTime), 0, 1, 0, windowWidth);
    this.posY = map(noise(this.noiseTime + 1), 0, 1, 0, windowHeight);
    this.noiseTime += 0.001;

    this.posX2 = map(
      noise(this.noiseTime2),
      0,
      1,
      0 - windowWidth * 0.25,
      windowWidth + windowWidth * 0.25
    );
    this.posY2 = map(noise(this.noiseTime2 + 2), 0, 1, 0, windowHeight);
    this.noiseTime2 += 0.01;
  }

  display() {
    stroke(random(118, 211), random(118, 180), 255, 50);
    strokeWeight(1);
    line(this.posX, this.posY, this.posX + 25, this.posY + 50);

    if (this.colorsito > 0.5) {
      strokeWeight(1);
      stroke(random(255, 135), random(248, 255), 118, 15);
      line(this.posX2, this.posY2, this.posX + 25, this.posY + 50);
    } else {
      strokeWeight(1);
      stroke(255, 163, 0, 15);
      line(this.posX2, this.posY2, this.posX + 25, this.posY + 50);

      // this.freq = constrain(map(this.posX, 0, 1, 100, 500), 100, 500);
      // this.amp = constrain(map(this.posY, 0, 1, 0, 1), 0, 1);
      // this.osc.start();
      // this.osc.freq(this.freq);
      // this.osc.amp(this.amp);
    }
  }
}
