// scores variables ...
var results = document.querySelector("#results");
var scores = []

function renderResults() {
    // Clear results element
    results.innerHTML = "";
  
    // Render a new li for each result
    for (var i = 0; i < scores.length; i++) {
      var score = scores[i];
  
      var li = document.createElement("li");
      li.textContent = score;
      li.setAttribute("score-index", i);
    }
  }
  