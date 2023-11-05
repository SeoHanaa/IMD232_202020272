function setup() {
  let dom = select('#hereSketch');
  console.log(dom);
  let canvas = createCanvas(600, 400);
  canvas.parent(dom);
  background('black');
}

function draw() {}

function windowResized() {
  console.log('리사이즈됩니다.');
  console.log(dom);
}
