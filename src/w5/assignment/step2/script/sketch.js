let pend;
let pend2;
let gravity;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);

  pend = new Pendulum(width / 2, 10, height / 2, (TAU / 360) * 30, 50);
  pend2 = new Pendulum(
    pend.ballPos.x,
    pend.ballPos.y,
    height / 4,
    (TAU / 360) * 10,
    50
  );
  gravity = createVector(0, 0.5);

  background(255);
}

function draw() {
  pend.applyForce(gravity);
  pend2.applyForce(gravity);

  pend.update();
  pend2.update();

  // pend2 = new Pendulum(
  //   pend.ballPos.x,
  //   pend.ballPos.y,
  //   height / 4,
  //   (TAU / 360) * 10,
  //   50
  // );

  background(255);
  pend.display();
  pend2.display();
}

function mouseMoved() {
  pend.mouseMoved(mouseX, mouseY);
  pend2.mouseMoved(mouseX, mouseY);
}
function mousePressed() {
  pend.mousePressed(mouseX, mouseY);
  pend2.mousePressed(mouseX, mouseY);
}
function mouseDragged() {
  pend.mouseDragged(mouseX, mouseY);
  pend2.mouseDragged(mouseX, mouseY);
}
function mouseReleased() {
  pend.mouseReleased();
  pend2.mouseReleased();
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
