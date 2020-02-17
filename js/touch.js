function startup() {
  var canvas = document.querySelector("canvas");
  canvas.addEventListener("touchstart", handleStart, false);
  canvas.addEventListener("touchend", handleEnd, false);
  canvas.addEventListener("touchcancel", handleCancel, false);
  canvas.addEventListener("touchmove", handleMove, false);
}

document.addEventListener("DOMContentLoaded", startup); 

const ongoingTouches = [];
let hue = Math.random();

function getUserPos(e) {
	const rect = canvas.getBoundingClientRect();
	const touches = e.changedTouches;
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const touchX = e.touches[i].pageX - rect.left;
  const touchY = e.touches[i].pageY - rect.top;
  return {
    X: Math.floor(touchX * scaleX),
    Y: Math.floor(touchY * scaleY),
  };
}

console.log(getUserPos);

function handleStart(e) {
  e.preventDefault();
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  const touches = e.changedTouches;
        
  for (let i = 0; i < touches.length; i++) {
    ongoingTouches.push(copyTouch(touches[i]));
    const color = `hsl(${hue * 100}, 100%, 62%)`;
    ctx.beginPath();
    ctx.arc(touches[i].pageX, touches[i].pageY, 4, 0, 2 * Math.PI, false);  
    ctx.fillStyle = color;
    ctx.fill();
  }
}
 function handleMove(e) {
  e.preventDefault();
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  const touches = e.changedTouches;

  for (let i = 0; i < touches.length; i++) {
    const color = `hsl(${hue * 100}, 100%, 62%)`;
    const idx = ongoingTouchIndexById(touches[i].identifier);

    if (idx >= 0) {
      ctx.beginPath();
      ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
      ctx.lineTo(touches[i].pageX, touches[i].pageY);
      ctx.lineWidth = 4;
      ctx.strokeStyle = color;
      ctx.stroke();
      ongoingTouches.splice(idx, 1, copyTouch(touches[i]));
    } else {
      console.log("can't figure out which touch to continue");
    }
  }
}
 function handleEnd(e) {
  e.preventDefault();
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  const touches = e.changedTouches;

  for (let i = 0; i < touches.length; i++) {
		const color = `hsl(${hue * 100}, 100%, 62%)`;
		const idx = ongoingTouchIndexById(touches[i].identifier);

    if (idx >= 0) {
      ctx.lineWidth = 10;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
      ctx.lineTo(touches[i].pageX, touches[i].pageY);
      ctx.fillRect(touches[i].pageX - 4, touches[i].pageY - 4, 0, 0);
      ongoingTouches.splice(idx, 1);
    } else {
      console.log("can't figure out which touch to end");
    }
  }
}
 function handleCancel(e) {
  e.preventDefault();
  const touches = e.changedTouches;
  
  for (let i = 0; i < touches.length; i++) {
    const idx = ongoingTouchIndexById(touches[i].identifier);
    ongoingTouches.splice(idx, 1);
  }
}

 function copyTouch({ identifier, pageX, pageY }) {
  return { identifier, pageX, pageY };
} 

function ongoingTouchIndexById(idToFind) {
  for (let i = 0; i < ongoingTouches.length; i++) {
    const id = ongoingTouches[i].identifier;
    
    if (id == idToFind) {
      return i;
    }
  }
  return -1;
}

const clearCanvas = () => {
	const canvas = document.querySelector("canvas");
 

  function animationTimeout() { 
    setTimeout(() => {
		const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.classList.remove(`clear-canvas`);
  }, 10);
}
  hue = Math.random();
  canvas.classList.add(`clear-canvas`);
  canvas.addEventListener(`animationend`, animationTimeout);
}
const clearBtn = document.querySelector(`button`);
clearBtn.addEventListener(`touchstart`, clearCanvas);