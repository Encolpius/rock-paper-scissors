let choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
  var pick = choices[Math.floor(Math.random() * choices.length)];
  return pick;
}

function game() {

  let playerSelection = prompt("So what's it going to be? Rock, paper, or scissors?")
  playerSelection = playerSelection.toLowerCase();
  let computerSelection = computerPlay();

  if (choices.indexOf(playerSelection) === -1) {
    console.log("Please type in rock, paper, or scissors!");
  }

  function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
      return("Rock beats Scissors! You win!");
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
      return("Paper beats Rock. You lose.");
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
      return("Paper beats Rock! You win!");
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
      return("Scissors beats Paper. You lose.");
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
      return("Scissors beats Paper! You win!");
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
      return("Rock beats Scissors. You lose.");
    } else if (playerSelection === computerSelection) {
      return("It's a tie.");
    }
  }

  console.log("You picked " + playerSelection + ".");
  console.log("The computer picked " + computerSelection + ".");
  console.log(playRound(playerSelection, computerSelection));

}

game();





/*
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a tie!");
  } else {
    console.log("Minabutt");
  }



}

const computerSelection = computerPlay();
const playerSelection = prompt('Rock, Paper, or Scissors?');
playRound();
*/
