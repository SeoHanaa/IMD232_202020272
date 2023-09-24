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
  background('white');

  mv = createVector();

  pos = createVector(width / 2, height / 2); // 원의 초기 위치
  vel = createVector(0, 0); // 초기 속도 벡터
  acc = createVector(0, 0); // 초기 가속도 벡터
}

function draw() {
  background('white');
  //   update();
  //   InfiniteEdges();
  display();

  vel.add(acc);
  pos.add(vel);
  vel.limit(5);

  let mouse = createVector(mouseX, mouseY);
  strokeWeight(2);
  stroke('black');
  line(pos.x, pos.y, mouseX, mouseY);

  mv.x = mouseX;
  mv.y = mouseY;

  // 가속도 설정 cacc = 써클 가속도
  let cacc = p5.Vector.sub(mouse, pos);
  cacc.setMag(0.1);
  acc = cacc;

  if (mouseIsPressed) {
    let clickPosition = createVector(mouseX, mouseY);
    let cacc = p5.Vector.sub(pos, clickPosition); // 써클 위치-클릭한 위치=의 백터길이
    cacc.setMag(10);
    pos.add(cacc);
  }
}

function display() {
  noStroke();
  fill('black');
  ellipse(pos.x, pos.y, 60);
}
