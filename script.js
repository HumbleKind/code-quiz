// header variables ...
var timerEl = document.querySelector("#timer");
var secondsLeft = 10;

// main variables ...
var startQuiz = document.querySelector("#start");
var startBttn = document.querySelector("#start-button");
var q1Div = document.querySelector("#q1");
var q2Div = document.querySelector("#q2");
var q3Div = document.querySelector("#q3");

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
            location.reload()
        }

    }, 1000);
}

// start button functionality ...
startBttn.addEventListener("click", function() {
    startQuiz.classList.add("hide");
    q1Div.classList.remove("hide");
    setTime();
});

// functionality to advance questions when an answer button is selected ...
document.getElementById("q1").addEventListener("click", function(event) {
    if(event.target.matches("button")) {
        q1Div.classList.add("hide");
        q2Div.classList.remove("hide");
    }
});

// QUESTION: which code is cleaner ^^ or ...
// q1Div.addEventListener("click", function(event) {
//     if(event.target.matches("button")) {
//         q1Div.classList.add("hide");
//         q2Div.classList.remove("hide");
//     }
// });

document.getElementById("q2").addEventListener("click", function(event) {
    if(event.target.matches("button")) {
        q2Div.classList.add("hide");
        q3Div.classList.remove("hide");
    }
});
