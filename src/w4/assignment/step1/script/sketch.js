let bodies = [];
let G = 1;
const bodyNum = 30;
let showVector = false;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  init();
  background(255);
}

function draw() {
  background(255);

  for (let i = 0; i < 40; i++) {
    for (let j = 0; j < 40; j++) {
      if (i !== j) {
        let forceForJ = bodies[i].attract(bodies[j]);
        bodies[j].applyForce(forceForJ);
      }
    }
    bodies[i].update();
    bodies[i].display();
    if (showVector) {
      bodies[i].displayVectors();
    }
  }
}

//function draw() {
//   for (let i = 0; i < bodies.length; i++) {
//     for (let j = 0 + 1; j < bodies.length; j++) {
//       if (i !== j) {
//       }
//     }
//   }
//   bodies.forEach((each) => {});
//   background(255);
//   bodies.forEach((each) => {});
// }

function mousePressed() {
  if (isMouseInsideCanvas()) {
    init();
  }
}

function init() {
  for (let i = 0; i < 40; i++) {
    bodies[i] = new Body(random(width), random(height), random(16, 100));
  }
}

//교수님의 초기 코드 스케치.js
// const bodies = [];
// const bodyNum = 30;
// const G = 1;

// function setup() {
//   setCanvasContainer('canvas', 1, 1, true);
//   init();
//   background(255);
// }

// function draw() {
//   for (let i = 0; i < bodies.length; i++) {
//     for (let j = 0 + 1; j < bodies.length; j++) {
//       if (i !== j) {
//       }
//     }
//   }
//   bodies.forEach((each) => {});
//   background(255);
//   bodies.forEach((each) => {});
// }

// function mousePressed() {
//   init();
// }

// function init() {}
