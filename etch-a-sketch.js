// Pull elements from DOM
const canvas = document.querySelector(`canvas`);
const ctx = canvas.getContext(`2d`);
const clearBtn = document.querySelector(`button`);

// Get coordinates on mousedown and mouseenter
const mousePosition = { x: 0, y: 0 };

function setPosition(e) {
  mousePosition.x = e.clientX - canvas.offsetLeft;
  mousePosition.y = e.clientY - canvas.offsetTop;
}
// Create draw function
function draw(e) {
  if (e.buttons !== 1) {
    return;
  }

  // /Begin the path
  ctx.beginPath();
  // /Set line properties
  ctx.lineCap = `round`;
  ctx.lineJoin = `round`;
  ctx.lineWidth = 10;
  ctx.strokeStyle = `#672293`;
  ctx.stroke();

  // /Draw on canvas
  ctx.moveTo(mousePosition.x, mousePosition.y);
  ctx.lineTo(mousePosition.x, mousePosition.y);

  // /Set flag for mouseup
}

// Attach mouse down, mousemove, and mouseup event listeners to the canvas
canvas.addEventListener(`mousemove`, draw);
canvas.addEventListener(`mousedown`, setPosition);
canvas.addEventListener(`mouseenter`, setPosition);

// create clear canvas function

// add event listener to button
