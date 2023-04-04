'use strict';

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function ControlCenter() {
	const [displayText, setDisplayText] = useState('');

	function handleClick() {
		console.log('clicked');
		// let minutes = 5;
		// let seconds = 0;

		// const timer = setInterval(() => {
		// 	if (seconds == 0) {
		// 		seconds = 59;
		// 		minutes--;
		// 	} else {
		// 		seconds--;
		// 	}

		// 	if (seconds < 10) {
		// 		seconds = `0${seconds}`;
		// 	}

		// 	if (minutes == 0 && seconds == 0) {
		// 		clearInterval(timer);
		// 		setShortBreak(true);
		// 	}
		// }, 1000);

		return (
			<div>
				<button onClick={handleClick}>Click ME</button>,
                <p>{displayText}</p>
			</div>
		);
	}

	ReactDOM.render(<Button />, document.getElementById('short-break'));
}
