let emitter;
let emitters = [];
let gravity = 0;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  // rectmode(CENTER);

  colorMode(HSL, 360, 100, 100);
  emitter = new Emitter(width / 2, -20);

  for (let i = 0; i < 10; i++) {
    emitters.push(new Emitter(random(width), -20, random(360), 100, 50));
  }
  // for (let i = 0; i < 5; i++) {
  //   emitters.push(new Emitter((width / 6) * (i + 1), 20));
  // }

  gravity = createVector(0, 0.25);

  background('white');
}

function draw() {
  // // 중심을 기준으로 회전
  // push(); // 현재 그래픽 상태를 스택에 저장
  // translate(width / 2, height / 2); // 중심으로 이동
  // rotate(radians(angle)); // 각도를 라디안으로 변환하여 회전
  // rect(0, 0, 100, 100); // 중심을 기준으로 사각형 그리기
  // pop(); // 이전 그래픽 상태로 복원

  // angle += 1; // 각도를 증가시켜 회전

  emitter.addParticle();
  for (let i = 0; i < emitters.length; i++) {
    emitters[i].addParticle();
  }

  background('white');
  emitter.update(gravity);
  emitter.display();
  for (let i = 0; i < emitters.length; i++) {
    emitters[i].update(gravity);
    emitters[i].display();
  }
  console.log(emitter.particles.length);
}

// function mousePressed() {
//   emitters.push(new Emitter(mouseX, mouseY));
// }

// let emitter;
// let balls = [];
// let gravity;
// let wind;

// function setup() {
//   setCanvasContainer('canvasGoesHere', 2, 1, true);

//   colorMode(HSL, 360, 100, 100);

//   emitter = new Emitter(width / 2, 0);

//   for (let n = 0; n < 10; n++) {
//     balls.push(new Ball(random(width), 0, random(1, 20), random(360), 100, 50));
//   }

//   gravity = createVector(0, 0.1);
//   wind = createVector(0.5, 0);

//   background(255);
// }

// function draw() {
//   background(255);
//   balls.forEach((each) => {
//     const scaledG = p5.Vector.mult(gravity, each.mass);
//     each.applyForce(scaledG);
//     each.applyForce(wind);
//     each.update();
//     each.display();
//   });
//   emitter.createBall();
//   emitter.applyGravity(gravity);
//   emitter.applyForce(wind);
//   emitter.update();
//   emitter.display();
// }

// function mousePressed() {
//   for (let n = 0; n < balls.length; n++) {
//     balls[n] = new Ball(random(width), 0, random(1, 20), random(360), 100, 50);
//   }
// }
