// 변수 선언
let posX;
let posY;
let posXAdd;
let posYAdd;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  posX = width / 2;
  posY = height / 2;
}

function draw() {
  background(255);
  // 이전에 있던 걸 지우지 않고 하면 더러워짐 그래서 필요
  ellipse(posX, posY, 50);

  posX += posXAdd;
  posY += posYAdd;
  // 계산하는 것들을 그리는 것보다 먼저 해줘야함!!
  // 중앙에 있어주고 그 다음 계산하면 그 다음에 반영돼요 - // 계산을 먼저 끝내고 보여주는 것이 좋음

  // 벡터는 2차원의 값으로 x와y값 둘다를 나타냄
  // 어떤 방향(각도)으로 얼마나(길이) 가느냐 저 방향이 벡터를 가르킴
}
