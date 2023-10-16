class Body {
  constructor(x, y, mass) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    // 랜덤한 질량
    this.mass = random(16, 100);
    this.radius = this.mass ** (1 / 2) * 5;
  }

  // class Body {
  //   constructor(x, y, mass) {
  //     this.pos;
  //     this.vel;
  //     this.acc;
  //     this.mass;
  //     this.rad;
  //   }

  attract(body) {
    const force = p5.Vector.sub(this.position, body.position);

    let distance = constrain(force.mag(), 80, 300);
    let strength = (G * (this.mass * body.mass)) / distance ** 2;
    force.setMag(strength);
    return force;
  }

  applyForce(force) {
    const acceleration = p5.Vector.div(force, this.mass);
    this.acceleration.add(acceleration);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.set(0, 0);
  }

  display() {
    noStroke();
    fill(0, 127);
    circle(this.position.x, this.position.y, this.radius * 2);
  }
}

//교수님의 제공한 초기 코드
// class Body {
//   constructor(x, y, mass) {
//     this.pos;
//     this.vel;
//     this.acc;
//     this.mass;
//     this.rad;
//   }

//   attract(body) {
//     const force = p5.Vector.sub(this.pos, body.pos);

//     return force;
//   }

//   applyForce(force) {
//     const acc = p5.Vector.div(force, this.mass);
//     this.acc.add(acc);
//   }

//   update() {
//     this.vel.add(this.acc);
//     this.pos.add(this.vel);
//     this.acc.set(0, 0);
//   }

//   display() {
//     noStroke();
//     fill(0, 127);
//     circle(this.pos.x, this.pos.y, this.rad * 2);
//   }
// }
