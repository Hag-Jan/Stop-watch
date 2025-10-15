let seconds = 0, minutes = 0, hours = 0;
let timer = null;

function updateDisplay() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById("displayTime").innerHTML = `${h}:${m}:${s}`;
}

function stopwatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    updateDisplay();
}

function watchStart() {
    if (timer !== null) clearInterval(timer);
    timer = setInterval(stopwatch, 1000);
}

function watchStop() {
    clearInterval(timer);
}

function watchReset() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
}

// Initialize display
document.addEventListener("DOMContentLoaded", updateDisplay);
