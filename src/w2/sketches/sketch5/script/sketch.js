function setup() {
  let canvas;
  canvas = createCanvas(500, 500);
  let canvasParent;
  canvasParent = select('#canvas-goes-here');
  canvas.parent(canvasParent);
  background(255);
}

function draw() {
  background(255, 0, 0);
  circle(mouseX, mouseY, 50);
}
