class Particle {
  constructor(x, y, h, s, v) {
    this.pos = createVector(x, y);
    this.vel = createVector(1, 0);
    this.vel.rotate((TAU / 360) * random(-150, -30));
    this.acc = createVector(0, 0);
    // this.rad = 8;
    this.lifeSpan = 512;
    this.color = color(h, s, v);
    // this.acc.rotate(TAU / 360);으앙ㅠ
  }

  applyForce(force) {
    this.acc.set(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.lifeSpan -= 2;

    // this.vel.rotate((TAU / 360) * random(0, 360));
  }

  display() {
    noStroke();
    fill(this.color);
    rect(this.pos.x, this.pos.y, 16);
  }

  //원본
  // display() {
  //   stroke(0, this.lifeSpan);
  //   fill(127, this.lifeSpan);
  //   ellipse(this.pos.x, this.pos.y, this.rad * 2);
  // }

  isDead() {
    return this.lifeSpan < 0;
  }
}

// class Ball {
//   constructor(posX, posY, mass, h, s, v) {
//     this.pos = createVector(posX, posY);
//     this.vel = createVector();
//     this.acc = createVector();
//     this.mass = mass;
//     this.rad = this.mass * 5;
//     this.color = color(h, s, v);
//   }

//   applyForce(force) {
//     const calcedAcc = p5.Vector.div(force, this.mass);
//     // const calcedAcc = force.div(this.mass);
//     this.acc.add(calcedAcc);
//   }

//   update() {
//     this.vel.add(this.acc);
//     // this.vel.limit(5);
//     this.pos.add(this.vel);
//     // this.acc.set(0, 0);
//     // this.acc.setMag(0);
//     this.acc.mult(0);
//   }

//   display() {
//     fill(this.color);
//     noStroke();
//     ellipse(this.pos.x, this.pos.y, 2 * this.rad);
//   }
// }
