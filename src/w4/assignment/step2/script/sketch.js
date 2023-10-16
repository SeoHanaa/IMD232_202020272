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

  moverA = new Mover(width / 2, height / 2, 100);
  gravity = createVector(0, 0.5);

  mVec = createVector();
  pMVec = createVector();

  background(255);
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

  //교수님제공코드
  const gravityA = p5.Vector.mult(gravity, moverA.mass);
  background(255);

  moverA.update();
  moverA.display();
  moverA.edgeBounce();
}
//let gravityA = createVector(gravity.x, gravity.y);

//원래 코드
// gravityA.mult(moverA.mass * 0.01);
// moverA.applyForce(gravityA);

gravityA.mult(moverA.mass * 0.01);
moverA.applyForce(gravityA);

if (mouseIsPressed && isMouseInsideCanvas()) {
  moverA.applyForce(Force);
}

if (moverA.edgeBounce()) {
  let c = 0.01;
  let friction = moverA.vel.copy();
  friction.mult(-1);
  friction.mult(c);
  moverA.applyForce(friction);
}

// moverA.update();
// moverA.edgeBounce();
// moverA.display();
// moverA.displayVectors();

function mouseMoved() {
  moverA.mouseMoved(mouseX, mouseY);
}
function mousePressed() {
  moverA.mousePressed(mouseX, mouseY);
}
function mouseDragged() {
  moverA.mouseDragged(mouseX, mouseY);
}
function mouseReleased() {
  pMVec.set(pmouseX, pmouseY);
  mVec.set(mouseX, mouseY);
  // moverA.applyForce(throwingForce);
}

// function mouseMoved() {}

// function mousePressed() {}

// function mouseDragged() {}

// function mouseReleased() {
//   pMVec.set(pmouseX, pmouseY);
//   mVec.set(mouseX, mouseY);

//   mover.applyForce(throwingForce);
// }

//step15코드
// function draw() {
//   pend.applyForce(gravity);
//   pend.update();

//   background(255);
//   pend.display();
// }

// function mouseMoved() {
//   pend.mouseMoved(mouseX, mouseY);
// }
// function mousePressed() {
//   pend.mousePressed(mouseX, mouseY);
// }
// function mouseDragged() {
//   pend.mouseDragged(mouseX, mouseY);
// }
// function mouseReleased() {
//   pMVec.set(pmouseX, pmouseY);
//   mVec.set(mouseX, mouseY);
//   mover.applyForce(throwingForce);
// }

//교수님코드
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

// 백업코드
// let moverA;
// // let moverB;
// let gravity;
// // let wind;
// let mVec;
// let pMVec;

// // let mover;
// // let gravity;
// // let mVec;
// // let pMVec;

// function setup() {
//   setCanvasContainer('canvas', 1, 1, true);

//   moverA = new Mover(width / 2, height / 2, 100);
//   gravity = createVector(0, 0.5);

//   mVec = createVector();
//   pMVec = createVector();

//   background(255);
// }

// // function setup() {
// //   setCanvasContainer('canvas', 1, 1, true);

// //   mover = new Mover(width / 2, height / 2, 100);
// //   gravity = createVector(0, 0.5);

// //   mVec = createVector();
// //   pMVec = createVector();

// //   background(255);
// // }

// function draw() {
//   background(255);

//   //교수님제공코드
//   const gravityA = p5.Vector.mult(gravity, moverA.mass);

//   //let gravityA = createVector(gravity.x, gravity.y);

//   //원래 코드
//   // gravityA.mult(moverA.mass * 0.01);
//   // moverA.applyForce(gravityA);

//   gravityA.mult(moverA.mass * 0.01);
//   moverA.applyForce(gravityA);

//   // if (mouseIsPressed && isMouseInsideCanvas()) {
//   //   moverA.applyForce(Force);
//   // }

//   if (moverA.edgeBounce()) {
//     let c = 0.01;
//     let friction = moverA.vel.copy();
//     friction.mult(-1);
//     friction.mult(c);
//     moverA.applyForce(friction);
//   }
//   moverA.update();
//   moverA.edgeBounce();
//   moverA.display();
//   // moverA.displayVectors();

//   function mouseMoved() {
//     moverA.mouseMoved(mouseX, mouseY);
//   }
//   function mousePressed() {
//     moverA.mousePressed(mouseX, mouseY);
//   }
//   function mouseDragged() {
//     moverA.mouseDragged(mouseX, mouseY);
//   }
//   function mouseReleased() {
//     pMVec.set(pmouseX, pmouseY);
//     mVec.set(mouseX, mouseY);
//     moverA.applyForce(Force);
//   }

//   // function mouseMoved() {}

//   // function mousePressed() {}

//   // function mouseDragged() {}

//   // function mouseReleased() {
//   //   pMVec.set(pmouseX, pmouseY);
//   //   mVec.set(mouseX, mouseY);

//   //   mover.applyForce(throwingForce);
//   // }
// }
