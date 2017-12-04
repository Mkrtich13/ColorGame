var squareNb;
var timerNb;
var turnNb;

function userSettings() {
  squareNb = document.querySelector("#settings__SquareNb").value;
  timerNb = document.querySelector("#settings__TimerNb").value;
  turnNb = document.querySelector("#settings__TurnNb").value;
}

function log() {
  console.log(squareNb, timerNb, turnNb);
}
