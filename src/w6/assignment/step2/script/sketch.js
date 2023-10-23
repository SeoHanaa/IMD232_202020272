let emitter;
let particle;
let g;
// let x = mouseX;
// let y = mouseY;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);

  colorMode(HSL, 360, 100, 100, 100);
  // emitter = new Emitter(width / 2, height / 2);
  emitter = new Emitter(width / 2, height / 2);
  particle = new Ball(width / 2, 0, 0, 0, 10, 0, 100, 50);

  g = createVector(0, 0.1);

  background('white');

  for (let n = 0; n < 100; n++) emitter.createBall();
}

function draw() {
  emitter.addParticle();
  // for (let i = 0; i < emitters.length; i++) {
  //   emitters[i].addParticle();
  // }

  background('white');
  const scaledG = p5.Vector.mult(g, particle.mass * 0.01);
  particle.applyForce(scaledG);
  particle.update();
  particle.display();

  emitter.createBall();
  emitter.applyGravity(g);
  emitter.update();
  emitter.display();
  console.log(emitter.balls.length);
}
function mousePressed() {
  emitter.push(new Emitter(mouseX, mouseY));
}
