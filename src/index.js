const playButton = document.querySelector('.play-button');
const timeDisplay = document.querySelector('.timer');
const shortBreakButton = document.querySelector('.short-break');

playButton.addEventListener('click', () => {
	console.log('clicked');
	beginTimer();
});



// begins timer for 25 minutes with minutes and seconds displayed
function beginTimer() {
	let minutes = 02;
	let seconds = 00;

	const timer = setInterval(() => {
		if (seconds == 00) {
			seconds = 59;
			minutes--;
		} else {
			seconds--;
		}

		if (seconds < 10) {
			seconds = `0${seconds}`;
		} 

		timeDisplay.textContent = `${minutes}:${seconds}`;

		if (minutes == 0 && seconds == 0) {
			clearInterval(timer);
	
		}
	}, 1000);
			
}
