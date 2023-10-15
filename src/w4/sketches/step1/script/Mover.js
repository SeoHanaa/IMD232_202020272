class Mover {
  //가까이 가면 생기는 npc마냥 명령어 constructor
  //반지름이 결정되면 반지름 맞는 질량으로 만들어보기
  constructor(x, y, radius) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    //크기 개념
    this.radius = radius;
    this.mass = radius ** (1 / 2);
    //반지름의 제곱근
  }

  applyForce(force) {
    // force.div(this.mass);
    let divedForce = p5.Vector.div(force, this.mass);
    this.acc.add(divedForce);
  }

  //규칙-클래스에서 함수를 만들땐 펑션을 적지 말아야함
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    // 이거 안하면 이상하게 움직임
  }

  edgeBounce() {
    if (this.pos.x < 0 + this.radius) {
      let delta = this.pos.x - (0 + this.radius);
      this.pos.x += -2 * delta; //튕기게하기
      //   만약 -15만큼 갔으면 -15*-2를 해서 30만큼 가도록 함
      this.vel.x *= -1;
    } else if (this.pos.x > width - 1 - this.radius) {
      let delta = this.pos.x - (width - 1 - this.radius);
      this.pos.x += -2 * delta;
      this.vel.x *= -1;
    }
    if (this.pos.y > height - 1 - this.radius) {
      let delta = this.pos.y - (height - 1 - this.radius);
      this.pos.y += -2 * delta;
      this.vel.y *= -1;
    }
  }
  display() {
    // 앞에 디스가 항상 들어가야함 이 포즈 무슨 포즈임?함
    fill('white');
    noStroke();
    ellipse(this.pos.x, this.pos.y, 2 * this.radius);
  }
}
