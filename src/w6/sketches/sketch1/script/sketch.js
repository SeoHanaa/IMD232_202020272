class ball {
  constructor(posX, posY, h,s,v) {
    this.pos = createVector(posX, posY);
    this.vel = createVector();
    this.acc = createVector();
    this.mass = 1;
    this.rad = 25;
    this.color = color(h,s,v);
  }
}

applyForce(force) {
    const calcedAcc = p5.Vector.div(force,this.mass);
    this.acc.add(calcedAcc);
}

update(){
    this.vel.add(this.acc);
    this.pos.add(this,vel);
    this.acc.mult(0);
}

display(){
    fill(this.color);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 2 * this.rad);
}

let balls= [];




function setup() {
  setCanvasContainer('canvasGoesHere', 2, 1, true);

  ColorMode(HSL, 360,100,100);
  for (let n = 0; n<10;n++){
    balls.push(new ball(random(width), 0, random(360), 100,50))
  }

  background(255);
}
function draw() {
    background(255);
balls.forEach(each) => {
    each.update();
    each.display();
}
}
