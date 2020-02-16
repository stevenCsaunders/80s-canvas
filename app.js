//PULL ALL ELEMENTS FROM DOM
const canvas = document.querySelector(`canvas`);
const canvasWrap = document.querySelector(`#canvasWrap`);
const ctx = canvas.getContext(`2d`);
const clearBtn = document.querySelector(`button`);
let hue = 0;

//EVENT LISTENERS ON TH4E CANVAS
canvas.addEventListener(`mousemove`, draw);
canvas.addEventListener(`mousedown`, startDraw);
canvas.addEventListener(`mouseup`, endDraw);
canvas.addEventListener(`touchmove`, draw);
canvas.addEventListener(`touchstart`, startDraw);
canvas.addEventListener(`touchend`, endDraw);

//FIND MOUSE OR TOUCH LOCATION
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

function getTouchPos(e) {
  if(!e) return;
  if(e.touches){
console.log(e.touches);
  }
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
  const pos = getMousePos(e);
  const title = document.querySelector(`h2`);
  
  //DONT DRAW UNLESS THE MAIN MOUSE BUTTON IS PRESSED
  const mouseNotClicked = e.buttons !== 1;
  if(mouseNotClicked) return;

  // STROKE STYLE
  ctx.lineCap = `round`;
  ctx.lineJoin = `round`;
  ctx.lineWidth = 10;
  ctx.strokeStyle = `hsl(${hue}, 100%, 62%)`;
  hue += 1;

  //DRAW
  ctx.lineTo(pos.X, pos.Y);
  ctx.stroke();
  ctx.moveTo(pos.X, pos.Y);

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
  
  canvas.classList.add(`clear-canvas`);
  canvas.addEventListener(`animationend`, animationTimeout);
}

clearBtn.addEventListener(`click`, clearCanvas);
