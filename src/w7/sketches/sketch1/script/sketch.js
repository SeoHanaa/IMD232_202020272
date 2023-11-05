let vehicle;
//마우스벡터
let mVec;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);

  colorMode(HSL, 360, 100, 100, 100);

  vehicle = new Vehicle(width / 2, height / 2, 16, 5, 0.1, color(330, 100, 50));

  colorMode(RGB, 255, 255, 255);
  background(255);

  mVec = createVector();
}

function draw() {
  background(255);

  mVec.set(mouseX, mouseY);
  vehicle.seek(mVec);

  vehicle.update();
  vehicle.display();
}
