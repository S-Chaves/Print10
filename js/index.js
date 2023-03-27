const canvas = document.querySelector('#canvas');
const HEIGHT = 400;
const WIDTH = 400;
const DIST = 10;
let x = 0;
let y = 0;

function draw() {
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    const ran = Math.random() < 0.5 ? 0 : 1;

    if (ran) backSlash(ctx);
    else forwardSlash(ctx);

    x += DIST;
    if (x > WIDTH) {
      y += DIST;
      x = 0;
    }
    requestAnimationFrame(draw);
  }
}

draw();

// Util functions
function backSlash(ctx) {
  ctx.moveTo(x, y);
  ctx.lineTo(x + DIST, y + DIST);
  ctx.stroke();
}

function forwardSlash(ctx) {
  ctx.moveTo(x, y + DIST);
  ctx.lineTo(x + DIST, y);
  ctx.stroke();
}