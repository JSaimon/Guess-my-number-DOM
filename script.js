"use strict";

let misteryNumber = Math.floor(Math.random() * 19) + 1;
let attempt = 0;
let record = 0;
let finished = false;

function CheckGuess() {
  if (!finished) {
    const guessedNumber = document.getElementById("guessedNumber").value;
    attempt++;

    if (guessedNumber == misteryNumber) {
      CheckRecord();
      document.getElementById("resultNumber").innerHTML = misteryNumber;
      document.getElementById("record").innerHTML = `Record: ${record}`;
      document.getElementById("gameSpace").style.backgroundColor = "Green";
      document.getElementById("infoMessage").innerHTML = "WINNER WINNER!";
      finished = true;
    } else if (guessedNumber > misteryNumber) {
      document.getElementById("infoMessage").innerHTML = "Too high!";
    } else {
      document.getElementById("infoMessage").innerHTML = "Too low!";
    }

    document.getElementById("try").innerHTML = `Try: ${attempt}`;
  }
}

function CheckRecord() {
  if (attempt < record || record == 0) {
    record = attempt;
  }
}

function Again() {
  if (finished) {
    document.getElementById("gameSpace").style.backgroundColor = "#212729";
    document.getElementById("resultNumber").innerHTML = "?";
    document.getElementById("infoMessage").innerHTML = "Start guessing...";
    document.getElementById("try").innerHTML = `Try: `;
    misteryNumber = Math.floor(Math.random() * 19) + 1;
    finished = false;
    attempt = 0;
  }
}
