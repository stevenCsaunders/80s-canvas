// Pull elements from DOM
const canvas = document.querySelector(`canvas`);
const canvasWrap = document.querySelector(`#canvasWrap`);
const ctx = canvas.getContext(`2d`);
const clearBtn = document.querySelector(`button`);
let hue = 0;

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

function startPainting(e) {
  ctx.beginPath();
  draw(e);
}

function endPainting() {
  ctx.beginPath();
}

function draw(e) {
  if (e.buttons !== 1) return;
  hue += 1;

  const pos = getMousePos(e);
  ctx.lineCap = `round`;
  ctx.lineJoin = `round`;
  ctx.lineWidth = 10;
  ctx.strokeStyle = `hsl(${hue}, 100%, 62%)`;
  hue += 1;
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

function clearCanvas() {
  canvas.classList.add(`clear-canvas`);
  canvasWrap.addEventListener(
    `animationend`,
    setTimeout(function() {
      canvas.classList.remove(`clear-canvas`);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 1000)
  );
}

clearBtn.addEventListener(`click`, clearCanvas);
