class Ball {
  constructor(posX, posY, velAngle, velMag, mass, h, s, v) {
    this.pos = createVector(posX, posY);
    this.vel = createVector(1, 0);
    this.vel.rotate(velAngle);
    this.vel.mult(velMag * 0.3);
    this.acc = createVector();
    this.mass = mass;
    this.rad = this.mass;
    this.color = color(h, s, v);

    this.lifeSpan = 60;
    // this.trans = trans;
  }

  applyForce(force) {
    this.acc.set(force);

    // const calcedAcc = p5.Vector.div(force, this.mass);
    const calcedAcc = (force, this.mass);
    this.acc.add(calcedAcc * 0.01);
  }

  update() {
    this.vel.add(this.acc);
    // this.vel.limit(5);
    this.pos.add(this.vel);
    // this.acc.set(0, 0);
    // this.acc.setMag(0);
    this.acc.mult(0);

    this.lifeSpan -= 1;
  }

  display() {
    const normalizedLife = constrain(this.life / this.lifeSpan, 0, 1);
    noStroke();
    fill(this.color, 255 * normalizedLife);
    ellipse(this.pos.x, this.pos.y, this.rad * 2);
  }

  isDead() {
    return this.lifeSpan < 0;
  }

  isDead() {
    return (
      this.pos.x < -this.rad ||
      this.pos.x > width + this.rad ||
      //   this.pos.y < -this.rad ||
      this.pos.y > height + this.rad
    );
  }
}
