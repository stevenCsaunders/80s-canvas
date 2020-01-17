// Pull elements from DOM
const canvas = document.querySelector(`canvas`);
const ctx = canvas.getContext(`2d`);
const clearBtn = document.querySelector(`button`);

function getMousePos(e) {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  return {
    X: Math.floor(mouseX * scaleX),
    Y: Math.floor(mouseY * scaleY),
  };
}

function startPainting() {
  ctx.beginPath();
}

function endPainting() {
  ctx.beginPath();
}

function draw(e) {
  if (e.buttons !== 1) return;
  const pos = getMousePos(e);
  ctx.lineCap = `round`;
  ctx.lineJoin = `round`;
  ctx.lineWidth = 10;
  ctx.strokeStyle = `#672293`;
  ctx.shadowColor = `#f72d9d`;
  ctx.shadowBlur = `15`;
  ctx.lineTo(pos.X, pos.Y);
  ctx.stroke();
  ctx.moveTo(pos.X, pos.Y);

  const status = document.querySelector(`#mouse-position`);
  status.innerHTML = `${pos.X} | ${pos.Y}`;
}

canvas.addEventListener(`mousemove`, draw);
canvas.addEventListener(`mousedown`, startPainting);
canvas.addEventListener(`mouseenter`, endPainting);

// create clear canvas function

// add event listener to button
