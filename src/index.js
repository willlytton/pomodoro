const playButton = document.querySelector(".play-button");
// const minutes = document.querySelector('.timer-minutes') = minutes;
// const seconds = document.querySelector('.timer-seconds') = seconds;

playButton.addEventListener("click", () => {
  console.log("play button clicked");
  intervalTimer();
});

const currentDate = new Date(); // gets correct date and time
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();
console.log(`${minutes}:${seconds}`);

// needs to set default 25 min countdown by adding 25 minutes to current time

// function startTimer(initMinutes, initSeconds) {  // when play button is clicked timer is started
//     let initMinutes = time.minutes; // initializes pomo start time based on current time for better synchronization
//     let initSeconds = time.seconds;
//     this.timer = this.currentTimer; // set Timer and current displayed Timer

//     this.intervalId = setInterval(() => {  // writing a function that calls clock to screen to better understand setInterval
//         if (currentTimer-- > 0) {
//             this.timer = currentTimer;
//         }

//         display.textContent = this.
//     })

// }

// let normalTimer = new startTimer(25, 0);

function intervalTimer(callback, interval = 500) {
  let counter = 1;
  let timeoutId;
  const startTime = Date.now();
  // function that starts a timer
  function startTimer() {
    // set current time
    const currentTime = Date.now();
    const nextTime = startTime + counter * interval;
    timeoutId = setTimeout(startTimer, interval - (currentTime - nextTime));
    console.log("deviation", currentTime - nextTime);
    // set minutes and seconds to current time
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    counter += 1;
    callback(minutes, seconds);
  }
  timeoutId = setTimeout(startTimer, interval);
  return () => clearTimeout(timeoutId);
}

let value = 10;

const timer = intervalTimer(() => {
  if (value > 0) {
    value -= 1;
  } else {
    timer();
  }
}, 1000);
//     // set timer to start at 25 minutes
//     let timer = 1500;
//     // set interval to start at 1 second
//     let interval = 1000;
//     // set interval to count down by 1 second
//     setInterval(function () {
//         timer--;
//         // set minutes to 25 minutes
//         minutes = 25;
//         // set seconds to 0
//         seconds = 0;
//         // display countdown on screen
//         document.querySelector(".timer-minutes").textContent = minutes;
//         document.querySelector(".timer-seconds").textContent = seconds;
//     }, interval);
// }
