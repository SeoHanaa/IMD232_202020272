function setup() {
  let canvas;
  canvas = createCanvas(500, 500);
  let canvasParent;
  canvasParent = select('#p5-canvas');
  canvas.parent(canvasParent);
  background(255);
}

function draw() {
  background(255, 0, 0);
  circle(mouseX, mouseY, 50);

  background('#FDFBF5');
  // 컬러 모드 초기화 및 기본값
  rectMode(CORNER);
  fill(255);
  colorMode(RGB);
  stroke(0);
  strokeWeight(1);

  noStroke();

  // 바닥
  fill('#E4DBC3');
  rect(0, 400, 500, 150);
  fill('#DFD9C9');
  rect(0, 400, 500, 20);
  fill('#FDF9EC');
  rect(0, 420, 500, 8);

  // 큰 창문
  fill('#92B2C1');
  rect(-40, 120, 405, 160, 4);
  fill('#677E8A');
  rect(-40, 125, 400, 150, 4);

  // 양쪽창문
  fill('#112B4A');
  rect(-20, 150, 150, 100);
  rect(180, 150, 150, 100);
  // 달
  ellipseMode(RADIUS);
  fill(249, 242, 145, 50);
  ellipse(280, 180, 50, 50);
  ellipse(280, 180, 35, 35);
  ellipseMode(CENTER);
  fill('#FFFCBD');
  ellipse(280, 180, 50, 50);
  // 곰팡이
  fill('#D4CE75');
  ellipse(270, 170, 12, 12);
  ellipse(290, 190, 8, 8);
  ellipse(280, 195, 5, 5);

  // 별1
  fill(249, 242, 145, 200);
  ellipse(200, 180, 20, 1);
  ellipse(200, 180, 1, 20);
  // 별2
  fill(255, 255, 255, 200);
  ellipse(100, 170, 20, 2);
  ellipse(100, 170, 3, 20);
  // 별3
  fill(249, 242, 145, 255);
  ellipse(50, 220, 30, 2);
  ellipse(50, 220, 2, 30);

  // 태양가리는사각형
  noStroke();
  fill('#677E8A');
  rect(180, 125, 150, 25);

  // 지붕
  rectMode(CENTER);
  stroke(233, 225, 202);
  strokeWeight(10);
  fill('#FFFFE8');
  rotate(radians(-68));
  rect(180, 350, 250, 500);

  stroke(215, 205, 179);
  strokeWeight(10);
  fill('#EEE7D6');
  rotate(radians(48));
  rect(-15, -210, 500, 500);

  // 책상
  resetMatrix();
  // 기울기초기화
  noStroke();

  // 책상다리
  fill('#4A6579');
  rect(150, 380, 15, 120, 4);
  fill('#4A6579');
  rect(450, 380, 15, 120, 4);

  // 책상머리
  fill('#4A6579');
  rect(300, 345, 320, 10);
  fill('#86A8C1');
  rect(300, 330, 320, 20, 6, 6, 0, 0);

  // 의자
  fill('#4A6579');
  rect(300, 410, 15, 70, 4);
  rect(390, 410, 15, 70, 4);

  fill('#748B9C');
  rect(345, 370, 110, 25, 4);
  fill('#AAC9E1');
  rect(345, 360, 110, 10, 4, 4, 0, 0);
  // 의자윗부분

  fill('#748B9C');
  rect(345, 300, 100, 25, 4);
  fill('#4A6579');
  rect(345, 303, 80, 10, 2);

  fill('#4A6579');
  rect(315, 340, 15, 70, 4);
  rect(375, 340, 15, 70, 4);
  // quad(200, 200, 400, 10, 600, 200, 300, 400);

  // 꽃줄기
  stroke('#50776E');
  strokeWeight(4);
  line(200, 318, 200, 250);

  // 화분
  noStroke();
  fill(87, 168, 192, 150);
  rect(200, 305, 20, 35, 2);

  // 꽃잎
  fill('#D0A7D8');

  ellipse(200, 233, 20, 20);
  ellipse(190, 243, 20, 20);
  ellipse(210, 243, 20, 20);

  ellipse(195, 253, 20, 20);
  ellipse(205, 253, 20, 20);

  // 꽃 중앙
  fill(255, 255, 0);
  ellipse(200, 245, 10, 10);

  // 파란빛
  fill(98, 113, 172, 50);
  rect(200, 200, 1000, 1000);

  // 조명
  // 전구
  // 빛
  translate(150, 150);
  rotate(radians(49));
  fill(255, 255, 204, 50);
  rect(290, 170, 800, 500);
  resetMatrix();

  stroke('#50776E');
  strokeWeight(14);
  line(133, 50, 133, 0);
  // 조립
  noStroke();
  fill('#E1D39D');
  ellipse(133, 50, 70, 70);

  fill('#50776E');
  arc(133, 50, 80, 80, PI, 0, CHORD);
}
