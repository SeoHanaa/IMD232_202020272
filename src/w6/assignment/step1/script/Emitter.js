class Emitter {
  constructor(x, y) {
    this.particles = [];
    this.pos = createVector(x, y);
  }

  addParticle() {
    this.particles.push(new Particle(random(width), -20, random(360), 80, 80));
  }

  update(gravity) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(gravity);
      this.particles[i].update();
      if (this.particles[i].isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].display();
    }
  }
}

// class Emitter {
//   constructor(emittingPosX, emittingPosY) {
//     this.emittingPos = createVector(emittingPosX, emittingPosY);
//     this.balls = [];
//   }

//   createBall() {
//     this.balls.push(
//       new Ball(
//         this.emittingPos.x,
//         this.emittingPos.y,
//         random(1, 5),
//         random(360),
//         100,
//         50
//       )
//     );
//   }

//   applyGravity(gravity) {
//     this.balls.forEach((each) => {
//       const scaledG = p5.Vector.mult(gravity, each.mass);
//       each.applyForce(scaledG);
//     });
//   }

//   applyForce(force) {
//     this.balls.forEach((each) => {
//       each.applyForce(force);
//     });
//   }

//   update() {
//     this.balls.forEach((each) => {
//       each.update();
//     });
//   }

//   display() {
//     this.balls.forEach((each) => {
//       each.display();
//     });
//   }
// }
