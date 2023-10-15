let moverA;
// let moverB;
let gravity;
// let wind;
let mVec;
let pMVec;

// let mover;
// let gravity;
// let mVec;
// let pMVec;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  background(255);
  moverA = new Mover(width / 2, height / 2, 100);
  //moverA = new Mover(width / 3, height / 2, 10);
  // moverB = new Mover((2 * width) / 3, height / 2, 1);
  gravity = createVector(0, 0.5);
  // wind = createVector(0.2, 0);
  mVec = createVector();
  pMVec = createVector();
}

// function setup() {
//   setCanvasContainer('canvas', 1, 1, true);

//   mover = new Mover(width / 2, height / 2, 100);
//   gravity = createVector(0, 0.5);

//   mVec = createVector();
//   pMVec = createVector();

//   background(255);
// }

function draw() {
  background(255);
  //const force = p5.Vector.mult(gravity, mover.mass);

  let gravityA = createVector(gravity.x, gravity.y);
  gravityA.mult(moverA.mass);
  moverA.applyForce(gravityA);
  if (mouseIsPressed && isMouseInsideCanvas()) {
    moverA.applyForce(wind);
  }
  if (moverA.contactEdge()) {
    let c = 0.01;
    let friction = moverA.vel.copy();
    friction.mult(-1);
    friction.mult(c);
    moverA.applyForce(friction);
  }
  moverA.update();
  moverA.checkEdges();
  moverA.display();
  moverA.displayVectors();
}

// function draw() {
//   const force = p5.Vector.mult(gravity, mover.mass);

//   background(255);
// }

// function mouseMoved() {}

// function mousePressed() {}

// function mouseDragged() {}

// function mouseReleased() {
//   pMVec.set(pmouseX, pmouseY);
//   mVec.set(mouseX, mouseY);

//   mover.applyForce(throwingForce);
// }

// 교수님 미완성 시작점 코드
// let mover;
// let gravity;
// let mVec;
// let pMVec;

// function setup() {
//   setCanvasContainer('canvas', 1, 1, true);

//   mover = new Mover(width / 2, height / 2, 100);
//   gravity = createVector(0, 0.5);

//   mVec = createVector();
//   pMVec = createVector();

//   background(255);
// }

// function draw() {
//   const force = p5.Vector.mult(gravity, mover.mass);

//   background(255);
// }

// function mouseMoved() {}

// function mousePressed() {}

// function mouseDragged() {}

// function mouseReleased() {
//   pMVec.set(pmouseX, pmouseY);
//   mVec.set(mouseX, mouseY);

//   mover.applyForce(throwingForce);
// }
