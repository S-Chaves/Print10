const canvas = document.querySelector('#canvas');
const HEIGHT = 400;
const WIDTH = 400;
let DIST = 10;
let CLEAN = false;
let x = 0;
let y = 0;

function draw() {
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    if (CLEAN) {
      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      x = 0;
      y = 0;
      CLEAN = false;
    }

    const rand = Math.random() < 0.5 ? 0 : 1;

    if (rand) backSlash(ctx);
    else forwardSlash(ctx);

    if (y < HEIGHT) {
      x += DIST;
      if (x > WIDTH) {
        y += DIST;
        x = 0;
      }
    }

    requestAnimationFrame(draw);
  }
}


draw();

// Util functions
function backSlash(ctx) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + DIST,  y + DIST);
  ctx.stroke();
}

function forwardSlash(ctx) {
  ctx.beginPath();
  ctx.moveTo(x, y + DIST);
  ctx.lineTo(x + DIST, y);
  ctx.stroke();
}

// Event listeners
document.querySelector('.distance').addEventListener('change', (e) => {
  DIST = parseInt(e.target.value);
  CLEAN = true;
});