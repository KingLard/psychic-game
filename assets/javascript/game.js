var wins = 0;
var losses = 0;
var guessLeft = 9
var guessSoFar = [];
var userGuess;
var computerGuess;
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var displayText = "Are you a psychic? Click any letter to start the playing!";

// create a function to display the results to the user
function updateDisplay() {
    document.querySelector("#displayText").innerHTML = displayText;
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#losses").innerHTML = losses;
    document.querySelector("#guessLeft").innerHTML = guessLeft;
    document.querySelector("#guessSoFar").innerHTML = guessSoFar;
};
updateDisplay();




