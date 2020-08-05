var timerEl = document.querySelector("#timer");
var secondsLeft = 60;

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

setTime();
