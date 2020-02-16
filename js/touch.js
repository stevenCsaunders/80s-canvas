//EVENT LISTENERS FOR TOUCH
const canvas = document.querySelector(`canvas`);
const ctx = canvas.getContext(`2d`);

function start() {
	canvas.addEventListener('touchstart', handleStart, false);
	canvas.addEventListener('touchend', handleEnd, false);
	canvas.addEventListener('touchcancel', handleCancel, false);
	canvas.addEventListener('touchmove', handleMove, false);
}

document.addEventListener('DOMContentLoaded', start);

function handleStart(e) {
	e.preventDefault();
	console.log('touching');
	const touches = e.changedTouches;

	for(let i = 0; i < touches; i++) {
		console.log(`toushstart ${i}...`);
		ongoingTouches.push(copyTouch(touches[i]));
		ctx.beginPath();
    ctx.arc(touches[i].pageX, touches[i].pageY, 4, 0, 2 * Math.PI, false);  // a circle at the start
    ctx.fillStyle = color;
    ctx.fill();
    console.log("touchstart:" + i + ".");
	}
}

function handleEnd() {

}

function handleMove() {

}

function handleCancel() {

}