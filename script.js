// header variables ...
var timerEl = document.querySelector("#timer");
var secondsLeft = 60;

// main variables ...
var startQuiz = document.querySelector("#start-quiz");
var startBttn = document.querySelector("#start-button");

// countdown timer initial set point ...
timerEl.textContent = "Time: 0";

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
startBttn.addEventListener("click", function() {
    startQuiz.classList.add("hide");
    setTime();
});
