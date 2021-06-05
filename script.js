var guessCorrect = 0;

//input secret words
var BANANA = "banana";
var CHISEL = "chisel";
var FAUCET = "faucet";

//set random numbers to banana, chisel, faucet
var getComputerInput = function () {
  var randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber == 0) {
    return BANANA;
  }
  if (randomNumber == 1) {
    return CHISEL;
  }
  return FAUCET;
};

var main = function (input) {
  var playerInput = input;
  var computerInput = BANANA;
  var genericOutput =
    "You guessed" + playerInput + "The secret word is" + computerInput;

  if (playerInput == computerInput) {
    guessCorrect = guessCorrect + 1;
    if (guessCorrect == 2) {
      return "you guessed twice correctly!";
    }
    console.log(guessCorrect);
    return genericOutput;
  }

  var myOutputValue = genericOutput;
  return myOutputValue;
};

//player must guess correctly twice in total

//output guessed work, secret word, & how many correct guesses the player needs to win
