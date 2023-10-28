
lineas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  for (let i = 0; i < 2; i++) {
    linea = new Linea();
    lineas.push(linea);
  }
}

function draw() {
  for (let i = 0; i < lineas.length; i++) {
    lineas[i].update();
    lineas[i].display();
  }

  
}
