let traffic; //traffic변수 선언
let infiniteOffset = 80; //변수 선언

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  // 컨버스의 비율
  colorMode(HSL, 360, 100, 100, 100); //컬러모드 변경
  background('white');
  // 캔버스의 배경
  traffic = new Traffic();
  for (let n = 0; n < 10; n++) {
    //처음 실행 시 파티클들이 어느정도(10개) 있게함
    traffic.addVehicle(random(width), random(height)); //생성 위치는 랜덤
  }
}

function draw() {
  background('white');
  // 캔버스가 계속 그리는 배경
  traffic.run(); //new Traffic실행
}

function mouseDragged() {
  traffic.addVehicle(mouseX, mouseY); //마우스위치에 traffic생성
}
