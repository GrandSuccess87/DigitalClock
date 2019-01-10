const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
	//set the current date
	const now = new Date();
	const seconds = now.getSeconds();
	//turn seconds into base 100
	const secondsDegrees = ((seconds/60) * 360) + 90;
	//turn seconds into degrees 
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	console.log(seconds);
	
	const mins = now.getMinutes();
	console.log('Minues: ' + mins);
	const minsDegrees = ((mins/60) * 360) + 90;
	minHand.style.transform = `rotate(${minsDegrees}deg)`;

	const hour = now.getMinutes();
	const hourDegrees = ((mins/12) * 360) + 90;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// run set date function every second
setInterval(setDate, 1000);