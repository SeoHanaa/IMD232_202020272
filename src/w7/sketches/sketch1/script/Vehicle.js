class Vehicle {
  constructor(x, y, rad, speedMx, forceMx, color) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.mass = 1;
    this.rad = rad;
    this.speedMx = speedMx;
    this.forceMx = forceMx;
    this.color = color;
  }

  applyForce(force) {
    let calcedAcc = p5.Vector.div(force, this.mass);
    // 그대로하면 force가 변조가 되기때문에 복사~느낌 force는 mass를 나눠줘
    // 폴스는 그냥 냅두고 변환된 값만 나에게 사본을 떠줘
    this.acc.add(calcedAcc);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    // 가속도는 매번 조합을 해서 나온다 바람?마우스?왼력?등등 종합해 산출됨 매 프라임마다 0에서 시작해야함

    this.vel.limit(this.speedMx);
    this.acc.mult(0);
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    let angle = this.vel.heading();
    rotate(angle);
    noStroke();
    fill(this.color);
    // 적는 순서대로 이어줌
    beginShape();
    vertex(this.rad, 0);
    // radians함수 각도 변환하는 함수
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135)));
    vertex(0, 0);
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135)));
    endShape(CLOSE);

    pop();
  }

  seek(target) {
    // 타겟에서 나를 뺴야 함
    // target.sub(this.pos)하면 타겟이 바뀌니
    // 타겟의 복사본을 만드는~
    const desiredVelocity = p5.Vector.sub(target, this.pos);

    desiredVelocity.setMag(this.speedMx);

    // if(debug){
    //   push();
    //   translate(this.pos.x,this.pos.y);
    //   noFill();
    //   stroke(127);
    //   pop();
    // }

    const steer = p5.Vector.sub(desiredVelocity, this.vel);
    steer.limit(this.forceMx);
    this.applyForce(steer);
  }
}
