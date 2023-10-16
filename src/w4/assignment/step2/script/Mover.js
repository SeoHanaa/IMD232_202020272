class Mover {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    this.accDisplay = createVector(0, 0);

    this.mass = mass;
    this.radius = this.mass ** 0.5 * 10;
    this.isHover = false;
    this.isDragging = false;
    this.draggingOffset = createVector();
  }

  // class Mover {
  //   constructor(x, y, mass) {
  //     this.pos;
  //     this.vel;
  //     this.acc;
  //     this.mass;

  //     this.rad;

  //     this.isHover;
  //     this.isDragging;
  //     this.draggingOffset;
  //   }

  applyForce(force) {
    let forceDividedByMass = createVector(force.x, force.y);
    forceDividedByMass.div(this.mass);
    this.acc.add(forceDividedByMass);
  }

  //applyForce(force) {}

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.accDisplay.set(this.acc);
    this.acc.mult(0);
  }

  //update() {}

  // contactEdge() {
  //   if (this.pos.y >= height - 1 - this.radius - 1) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  edgeBounce() {
    const bounce = -0.7;
    if (this.pos.x < 0 + this.radius) {
      this.pos.x = 0 + this.radius;
      this.vel.x *= bounce;
    } else if (this.pos.x > width - 1 - this.radius) {
      this.pos.x = width - 1 - this.radius;
      this.vel.x *= bounce;
    }
    if (this.pos.y > height - 1 - this.radius) {
      this.pos.y = height - 1 - this.radius;
      this.vel.y *= bounce;
    }
  }

  // checkEdges() {
  //   const bounce = -0.9;
  //   if (this.pos.x < 0 + this.radius) {
  //     this.pos.x -= 0 + this.radius;
  //     this.pos.x *= -1;
  //     this.pos.x += 0 + this.radius;
  //     this.vel.x *= bounce;
  //   } else if (this.pos.x > width - 1 - this.radius) {
  //     this.pos.x -= width - 1 - this.radius;
  //     this.pos.x *= -1;
  //     this.pos.x += width - 1 - this.radius;
  //     this.vel.x *= bounce;
  //   }
  //   if (this.pos.y > height - 1 - this.radius) {
  //     this.pos.y -= height - 1 - this.radius;
  //     this.pos.y *= -1;
  //     this.pos.y += height - 1 - this.radius;
  //     this.vel.y *= bounce;
  //   }
  // }

  display() {
    noStroke();
    fill(0);
    ellipse(this.pos.x, this.pos.y, 2 * this.radius);
  }

  //   display() {
  //     noStroke();
  //     fill(0);
  //     ellipse(this.pos.x, this.pos.y, 2 * this.rad);
  //   }

  // displayVectors() {
  //   stroke('red');
  //   line(
  //     this.pos.x,
  //     this.pos.y,
  //     this.pos.x + this.vel.x * 10,
  //     this.pos.y + this.vel.y * 10
  //   );
  //   stroke('lime');
  //   line(
  //     this.pos.x,
  //     this.pos.y,
  //     this.pos.x + this.accDisplay.x * 100,
  //     this.pos.y + this.accDisplay.y * 100
  //   );
  // }

  mouseMoved(mX, mY) {
    this.isHover =
      (this.pos.x - mX) ** 2 + (this.pos.y - mY) ** 2 <= this.rad ** 2;
  }

  mousePressed(mX, mY) {
    if (this.isHover) {
      this.isDragging = true;
      this.movingOffset.set(mX - this.ballPos.x, mY - this.ballPos.y);
    }
  }

  mouseDragged(mX, mY) {
    if (this.isDragging) {
    }
  }

  mouseReleased() {
    this.isDragging = false;
  }

  // mouseMoved(mX, mY) {
  //   this.isHover =
  //     (this.ballPos.x - mX) ** 2 + (this.ballPos.y - mY) ** 2 <=
  //     this.ballRad ** 2;
  // }

  // mousePressed(mX, mY) {
  //   if (this.isHover) {
  //     this.isDragging = true;
  //     this.movingOffset.set(mX - this.ballPos.x, mY - this.ballPos.y);
  //   }
  // }

  // mouseDragged(mX, mY) {
  //   if (this.isDragging) {
  //     const ballShouldBe = createVector(
  //       mX - this.movingOffset.x,
  //       mY - this.movingOffset.y
  //     );
  //     const angle = atan2(
  //       ballShouldBe.y - this.pos.y,
  //       ballShouldBe.x - this.pos.x
  //     );
  //     this.angle = angle;
  //   }
  // }

  // mouseReleased() {
  //   this.isDragging = false;
  // }
}

// 교수님 미완성 시작점 코드

// class Mover {
//   constructor(x, y, mass) {
//     this.pos;
//     this.vel;
//     this.acc;
//     this.mass;
//     this.rad;
//     this.isHover;
//     this.isDragging;
//     this.draggingOffset;
//   }

//   applyForce(force) {}

//   update() {}

//   edgeBounce() {
//     const bounce = -0.7;
//     if (this.pos.x < 0 + this.rad) {
//       this.pos.x = 0 + this.rad;
//       this.vel.x *= bounce;
//     } else if (this.pos.x > width - 1 - this.rad) {
//       this.pos.x = width - 1 - this.rad;
//       this.vel.x *= bounce;
//     }
//     if (this.pos.y > height - 1 - this.rad) {
//       this.pos.y = height - 1 - this.rad;
//       this.vel.y *= bounce;
//     }
//   }

//   display() {
//     noStroke();
//     fill(0);
//     ellipse(this.pos.x, this.pos.y, 2 * this.rad);
//   }

//   mouseMoved(mX, mY) {
//     this.isHover =
//       (this.pos.x - mX) ** 2 + (this.pos.y - mY) ** 2 <= this.rad ** 2;
//   }

//   mousePressed(mX, mY) {
//     if (this.isHover) {
//     }
//   }

//   mouseDragged(mX, mY) {
//     if (this.isDragging) {
//     }
//   }

//   mouseReleased() {
//     this.isDragging = false;
//   }
// }
