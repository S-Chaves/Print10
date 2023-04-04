const canvas = document.querySelector('#canvas');
const HEIGHT = 400;
const WIDTH = 400;
let XDIST = 10;
let YDIST = 10;
let CLEAN = false;
let DISTRIBUTION = 0.5;
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

    const rand = Math.random() < DISTRIBUTION ? 0 : 1;

    if (rand) backSlash(ctx);
    else forwardSlash(ctx);

    if (y < HEIGHT) {
      x += XDIST;
      if (x > WIDTH) {
        y += YDIST;
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
  ctx.lineTo(x + XDIST,  y + YDIST);
  ctx.stroke();
}

function forwardSlash(ctx) {
  ctx.beginPath();
  ctx.moveTo(x, y + YDIST);
  ctx.lineTo(x + XDIST, y);
  ctx.stroke();
}

// Event listeners
document.querySelector('.xdistance').addEventListener('change', (e) => {
  XDIST = parseInt(e.target.value);
  CLEAN = true;
});

document.querySelector('.ydistance').addEventListener('change', (e) => {
  YDIST = parseInt(e.target.value);
  CLEAN = true;
});

document.querySelector('.distribution').addEventListener('change', (e) => {
  DISTRIBUTION = parseInt(e.target.value);
});
