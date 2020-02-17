//PULL ALL ELEMENTS FROM DOM
const canvas = document.querySelector(`canvas`);
const ctx = canvas.getContext(`2d`);
const clearBtn = document.querySelector(`button`);
let hue = Math.random();

//EVENT LISTENERS ON THE CANVAS
canvas.addEventListener(`mousemove`, draw);
canvas.addEventListener(`mousedown`, startDraw);
canvas.addEventListener(`mouseup`, endDraw);

//FIND MOUSE LOCATION
function getUserPos(e) {
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

//STARTING, DRAWING, AND STOPPING FUNCTIONS
function startDraw(e) {
  ctx.beginPath();
  draw(e);
}

function endDraw() {
  ctx.beginPath();
}

function draw(e) {
  const pos = getUserPos(e);
  const title = document.querySelector(`h2`);

  //DONT DRAW UNLESS THE MAIN MOUSE BUTTON IS PRESSED
  const mouseNotClicked = e.buttons !== 1;
  const color = `hsl(${hue * 100}, 100%, 62%)`;
  if(mouseNotClicked) return;

  // STROKE STYLE
  ctx.lineCap = `round`;
  ctx.lineJoin = `round`;
  ctx.lineWidth = 10;
  ctx.strokeStyle = color;
  //DRAW
  ctx.lineTo(pos.X, pos.Y);
  ctx.stroke();
  ctx.moveTo(pos.X, pos.Y);
  //COLOR CHANGING BAR
  title.style = `border-bottom: 10px solid ${ctx.strokeStyle};`;
}

//CLEAR THE CANVAS
const clearCanvas = () => {
  function animationTimeout() { 
    setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.classList.remove(`clear-canvas`);
  }, 10);
}
  hue = Math.random();
  canvas.classList.add(`clear-canvas`);
  canvas.addEventListener(`animationend`, animationTimeout);
}
clearBtn.addEventListener(`click`, clearCanvas);
