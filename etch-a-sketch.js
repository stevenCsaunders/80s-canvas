// Pull elements from DOM
const canvas = document.querySelector(`canvas`);
const ctx = canvas.getContext(`2d`);
const clearBtn = document.querySelector(`button`);

// Get width and height of canvas
const { width } = canvas.width;
const { height } = canvas.height;

// Get coordinates on mousedown and mouseenter
const mousePosition = { x: 0, y: 0 };

function setPosition(e) {
  mousePosition.x = e.clientX;
  mousePosition.y = e.clientY;
}

// Attach mouse down, mousemove, and mouseup event listeners to the canvas
canvas.addEventListener(`mousemove`, draw);
canvas.addEventListener(`mousedown`, setPosition);
canvas.addEventListener(`mouseenter`, setPosition);

// Create draw function
function draw() {}

// /Begin the path

// /Set line properties

// /Draw on canvas

// /Set flag for mouseup

// create clear canvas function

// add event listener to button

//
