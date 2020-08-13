// header variables ...
var timerEl = document.querySelector("#timer");
var timerInterval;
var secondsLeft = 60;

// main variables ...
var startQuiz = document.querySelector("#start");
var startBttn = document.querySelector("#start-button");

var q1Div = document.querySelector("#q1");
var q2Div = document.querySelector("#q2");
var q3Div = document.querySelector("#q3");
var q4Div = document.querySelector("#q4");
var q5Div = document.querySelector("#q5");

var done = document.querySelector("#done");

// score variables ...
// var initialsInput = document.querySelector("#initials-text");
// var resultsList = document.querySelector("#results-list");
// console.log(resultsList);

// var results = [];

// countdown timer initial set point ...
timerEl.textContent = "Time: 0";

// countdown timer functionality ...
function setTime() {
    timerInterval = setInterval(function() {
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
    if(event.target.matches("#incorrectAnswer")) {
        secondsLeft = secondsLeft - 5;
    }
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
    if(event.target.matches("#incorrectAnswer")) {
        secondsLeft = secondsLeft - 5;
    }
    if(event.target.matches("button")) {
        q2Div.classList.add("hide");
        q3Div.classList.remove("hide");
    }
});

document.getElementById("q3").addEventListener("click", function(event) {
    if(event.target.matches("#incorrectAnswer")) {
        secondsLeft = secondsLeft - 5;
    }
    if(event.target.matches("button")) {
        q3Div.classList.add("hide");
        q4Div.classList.remove("hide");
    }
});

document.getElementById("q4").addEventListener("click", function(event) {
    if(event.target.matches("#incorrectAnswer")) {
        secondsLeft = secondsLeft - 5;
    }
    if(event.target.matches("button")) {
        q4Div.classList.add("hide");
        q5Div.classList.remove("hide");
    }
});

document.getElementById("q5").addEventListener("click", function(event) {
    if(event.target.matches("#incorrectAnswer")) {
        secondsLeft = secondsLeft - 5;
    }
    if(event.target.matches("button")) {
        clearInterval(timerInterval);
        timerEl.textContent = "Time: 0";
        q5Div.classList.add("hide");
        done.classList.remove("hide");
        // console.log(secondsLeft);
        document.getElementById("score").innerHTML = secondsLeft;
    }
});

// function renderResults() {
//     // Clear results element
//     resultsList.innerHTML = "";

//     // Render a new li for each result
//     for (var i = 0; i < results.length; i++) {
//         var result = results[i];
    
//         var li = document.createElement("li");
//         li.textContent = result;
//         li.setAttribute("result-index", i);

//         resultsList.appendChild(li);
//     }
// }

// function init() {
//     // Get stored results from localStorage
//     // Parsing the JSON string to an object
//     var storedResults = JSON.parse(localStorage.getItem("results"));

//     // If results were retrieved from localStorage, update the results array to it
//     if (storedResults !== null) {
//         results = storedResults;
//     }

//     // Render results to the DOM
//     renderResults();
// }

// function storeResults() {
//     // Stringify and set "results" key in localStorage to results array
//     localStorage.setItem("results", JSON.stringify(results));
// }

// // When a result is submitted ...
// document.getElementById("submit").addEventListener("click", function(event) {
//     event.preventDefault();

//     var resultText = initialsInput.value.trim();

//     // Return from function early if submitted resultText is blank
//     if (resultText === "") {
//         return;
//     }

//     // Add new resultText to results array, clear the input
//     results.push(resultText);
//     initialsInput.value = "";

//     // Store updated results in localStorage, re-render the list
//     storeResults();
//     renderResults();
// });