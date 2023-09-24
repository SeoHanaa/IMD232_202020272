let pos;
let vel;
let acc;
let rad = 30; //원의 반지름

function setup() {
  let canvas;
  canvas = createCanvas(700, 700);
  let canvasParent;
  canvasParent = select('#p5-canvas');
  canvas.parent(canvasParent);
  background('white');

  pos = createVector(random(width), random(height));
  vel = createVector(0, 0);
  acc = p5.Vector.random2D(); // 랜덤방향 백터로 가속 생성 // acc.mult(0.1);
}

function draw() {
  background('white');
  update();
  InfiniteEdges();
  display();

  let mouse = createVector(mouseX, mouseY);

  strokeWeight(2);
  stroke('black');
  line(pos.x, pos.y, mouseX, mouseY);

  // // accelerationX = createVector();
  // // accelerationY = createVector();
  // accelerationVelX = createVector();
  // accelerationVelY = createVector();

  // 가속도 설정
  let cacc = p5.Vector.sub(mouse, pos);
  cacc.setMag(0.1);
  acc = cacc;

  // 가속도와 속도 시각화하기
  // cacc = p5.Vector.sub(a, b)
  // c = p5.Vector.sub(mouse, cv);

  // 맞는거
  translate(pos.x, pos.y);
  stroke(0);
  strokeWeight(2);
  stroke('crimson');
  line(0, 0, pos.x + accelerationX, pos.y + accelerationY);

  // translate(pos.x, pos.y);
  // stroke(0);
  // strokeWeight(10);
  // stroke('crimson');
  // line(0, 0, pos.x + acc, pos.y + acc);
}

function update() {
  acc = p5.Vector.random2D();
  vel.add(acc);
  pos.add(vel);
  // acc.mult(0.1);
  // 매번 acc가 0.1을 가지고 랜덤 생성
  vel.limit(5);

  // // 움직이는 방향 벡터
  // let accelerationX = (pos.x + acc) / 10;
  // let accelerationY = (pos.y + acc) / 10;
  // 가속도 벡터 - 구현 못했습니다..
  // let accelerationVelX = pos.x + vel;
  // let accelerationVelY = pos.y + vel;
  // console.log('accelerationX', accelerationX);
  // console.log('accelerationY', accelerationY);
}

// 밖으로 나갈 경우 안쪽으로 들어오게
function InfiniteEdges() {
  if (pos.x < 0) {
    pos.x += width;
  } else if (pos.x >= width) {
    pos.x -= width;
  }
  if (pos.y < 0) {
    pos.y += height;
  } else if (pos.y >= height) {
    pos.y -= height;
  }
}

function display() {
  noStroke();
  fill('black');
  ellipse(pos.x, pos.y, 2 * rad);
}
