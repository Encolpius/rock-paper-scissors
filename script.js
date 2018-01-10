let choices = ['rock', 'paper', 'scissors'];
let button = document.querySelector('button');
let rock = document.getElementById('rock') ;
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

function computerPlay() {
  var pick = choices[Math.floor(Math.random() * choices.length)];
  return pick;
}

let playerCount = 0;
let computerCount = 0;
let round = 0;

function playRock() {

  computerSelection = computerPlay();
  console.log("You picked ROCK. The computer picked " + computerSelection.toUpperCase() + ".");

  if (computerSelection === 'scissors') {
    playerCount++;
    console.log("Rock beats Scissors! You win!");
  } else if (computerSelection === 'paper') {
    computerCount ++;
    console.log("Paper beats Rock. You lose.");
  } else {
    console.log("You tied with the computer.")
  }

  console.log("\nYou have " + playerCount + " points. The computer has " + computerCount + " points.");

}


function playPaper() {

  computerSelection = computerPlay();
  console.log("You picked PAPER. The computer picked " + computerSelection.toUpperCase() + ".");

  if (computerSelection === 'rock') {
    playerCount++;
    console.log("Paper beats Rock! You win!");
  } else if (computerSelection === 'scissors') {
    computerCount ++;
    console.log("Scissors beats Paper. You lose.");
  } else {
    console.log("You tied with the computer.")
  }

  console.log("\nYou have " + playerCount + " points. The computer has " + computerCount + " points.");
}


function playScissors() {
  computerSelection = computerPlay();
  console.log("You picked SCISSORS. The computer picked " + computerSelection.toUpperCase() + ".");

  if (computerSelection === 'paper') {
    playerCount++;
    console.log("Scissors beats Paper! You win!");
  } else if (computerSelection === 'rock') {
    computerCount ++;
    console.log("Rock beats Scissors. You lose.");
  } else {
    console.log("You tied with the computer.")
  }

  console.log("\nYou have " + playerCount + " points. The computer has " + computerCount + " points.");
}

if (playerCount === 5) {
  console.log("YOU WON! Play again?");
}


rock.onclick = function() {
  playRock();
}

paper.onclick = function() {
  playPaper();
}

scissors.onclick = function() {
  playScissors();
}
