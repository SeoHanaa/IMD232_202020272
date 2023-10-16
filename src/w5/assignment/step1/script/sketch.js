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

//교수님 제공 코드

// const cNum = 8;
// const rNum = 8;
// let gridC;
// let gridR;
// let angleBegin = 0;
// let angleBeginVel;
// let angleStep;

// function setup() {
//   setCanvasContainer('canvas', 1, 1, true);

//   colorMode(HSL, 360, 100, 100, 100);
//   background(360, 0, 100);
// }

// function draw() {
//   background(360, 0, 100);

//   for (let r = 0; r < rNum; r++) {
//     for (let c = 0; c < cNum; c++) {
//       push();
//       translate();
//       rotate();
//       pop();
//     }
//   }

//   angleBegin += angleBeginVel;
// }
