// header variables ...
var timerEl = document.querySelector("#timer");
var secondsLeft = 60;

// main variables ...
var startBttn = document.querySelector("#start-button");

// countdown timer initial set point ...
timerEl.textContent = "Time: " + secondsLeft;

// countdown timer functionality ...
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
        }

    }, 1000);
}

// start button functionality ...
startBttn.addEventListener("click", setTime);
