const secondHand = document.querySelector('.second-hand');

function setSeconds() {
	const now = new Date();
	const seconds = now.getSeconds();
	const secondsDegrees = ((seconds/60) * 360) +90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	console.log(seconds);
}

setInterval(setSeconds, 1000);