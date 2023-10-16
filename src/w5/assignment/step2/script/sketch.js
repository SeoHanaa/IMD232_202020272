let pend;
let gravity;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);

  pend = new Pendulum(width / 2, 10, height / 2, (TAU / 360) * 30, 50);
  gravity = createVector(0, 1);

  background(255);
}

function draw() {
  pend.applyForce(gravity);
  pend.update();

  background(255);
  pend.display();
}

function mouseMoved() {
  pend.mouseMoved(mouseX, mouseY);
}
function mousePressed() {
  pend.mousePressed(mouseX, mouseY);
}
function mouseDragged() {
  pend.mouseDragged(mouseX, mouseY);
}
function mouseReleased() {
  pend.mouseReleased();
}

//교수님 코드
// let pendulumA;
// let gravity;

// function setup() {
//   setCanvasContainer('canvas', 2, 1, true);

//   pendulumA = new Pendulum(width / 2, 10, height / 3, (TAU / 360) * 45, 25);
//   gravity = createVector(0, 0.5);

//   background(255);
// }

// function draw() {
//   pendulumA.applyGravity(gravity);
//   pendulumA.update();
//   background(255);
//   pendulumA.display();
// }

// function mouseMoved() {
//   pendulumA.mouseMoved(mouseX, mouseY);
// }

// function mousePressed() {
//   pendulumA.mousePressed(mouseX, mouseY);
// }

// function mouseDragged() {
//   pendulumA.mouseDragged(mouseX, mouseY);
// }

// function mouseReleased() {
//   pendulumA.mouseReleased();
// }
