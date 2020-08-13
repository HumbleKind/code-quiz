// score variables ...
var initialsInput = document.querySelector("#initials-text");
var resultsList = document.querySelector("#results-list");
console.log(resultsList);

var results = [];

function renderResults() {
  // Clear results element
  resultsList.innerHTML = "";

  // Render a new li for each result
  for (var i = 0; i < results.length; i++) {
      var result = results[i];
  
      var li = document.createElement("li");
      li.textContent = result;
      li.setAttribute("result-index", i);

      resultsList.appendChild(li);
  }
}

function init() {
  // Get stored results from localStorage
  // Parsing the JSON string to an object
  var storedResults = JSON.parse(localStorage.getItem("results"));

  // If results were retrieved from localStorage, update the results array to it
  if (storedResults !== null) {
      results = storedResults;
  }

  // Render results to the DOM
  renderResults();
}

function storeResults() {
  // Stringify and set "results" key in localStorage to results array
  localStorage.setItem("results", JSON.stringify(results));
}

// When a result is submitted ...
document.getElementById("submit").addEventListener("click", function(event) {
  event.preventDefault();

  var resultText = initialsInput.value.trim();

  // Return from function early if submitted resultText is blank
  if (resultText === "") {
      return;
  }

  // Add new resultText to results array, clear the input
  results.push(resultText);
  initialsInput.value = "";

  // Store updated results in localStorage, re-render the list
  storeResults();
  renderResults();
});