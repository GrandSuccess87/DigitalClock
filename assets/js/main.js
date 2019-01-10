function setSeconds() {
	const now = new Date();
	const seconds = now.getSeconds();
	console.log(seconds);
}

setInterval(setSeconds, 1000);