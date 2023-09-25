let pos; // 위치
let vel; // 속도
let acc; // 가속도
let mv; // 마우스벡터

function setup() {
  let canvas;
  canvas = createCanvas(700, 700);
  let canvasParent;
  canvasParent = select('#p5-canvas');
  canvas.parent(canvasParent);
  background('#F3EFFF');

  mv = createVector();

  pos = createVector(width / 2, height / 2); // 원의 초기 위치
  vel = createVector(0, 0); // 초기 속도 벡터
  acc = createVector(0, 0); // 초기 가속도 벡터
}

function draw() {
  background('#F3EFFF');
  //   update();
  //   InfiniteEdges();
  display();
  displayVectors();

  vel.add(acc);
  pos.add(vel);
  vel.limit(5);

  let mouse = createVector(mouseX, mouseY);
  strokeWeight(2);
  stroke('black');
  line(pos.x, pos.y, mouseX, mouseY);

  mv.x = mouseX;
  mv.y = mouseY;

  // 가속도 설정
  let cacc = p5.Vector.sub(mouse, pos);
  cacc.setMag(0.1);
  acc = cacc;
}

// function update() {
//   acc = p5.Vector.random2D();
//   vel.add(acc);
//   pos.add(vel);
//   acc.mult(0.1);
// }

function display() {
  noStroke();
  fill('#655995');
  ellipse(pos.x, pos.y, 60);
}

function displayVectors() {
  stroke('red');
  line(pos.x, pos.y, pos.x + vel.x * 10, pos.y + vel.y * 10);
}
