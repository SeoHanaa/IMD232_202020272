// let posX; 어차피 이 둘은 한 몸임
// let posY; 어차피 이 둘은 한 몸이니 하나로 합쳐보자
let pos;
// let posXAdd;
// let posYAdd;
let vel;
let radius = 50;
let acc;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  pos = createVector(width / 2, height / 2);
  vel = createVector(3, 5);
  acc = createVector(0, 1);

  console.log(pos);
  console.log(vel);
  //  이걸 해주고 나면 컴퓨터 입장에선 값이 들어있진 않은데
  //  백터 기능을 쓸 수 있는 거구나 알게됨 그래서 한번은 꼭 해주기
  ellipse(pos.x, pos.y, 2 * radius);
}

function draw() {
  background(255);
  pos.add(vel);
  // 너는 앞으로 백터다.
  //   백터에서 사용할 수 있는 기능을 사용가능하게 된거다.
  //   그래서 .add가 사용 가능
  ellipse(pos.x, pos.y, 2 * radius);

  if (pos.x - radius < 0 || pos.x + radius > width) {
    vel.x *= -1;
  }
  if (pos.y - radius < 0 || pos.y + radius > height) {
    vel.y *= -1;
  }
}
