let choices = ['rock', 'paper', 'scissors'];

/*
Button variables
*/

let button = document.querySelector('button');
let rock = document.getElementById('1');
let scissors = document.getElementById('2');
let paper = document.getElementById('3');

/*
Scoreboard variables
*/

let playerScore = document.getElementById('playerscore');
let computerScore = document.getElementById('computerscore');
let playerChoice = document.getElementById('playerchoice');
let computerChoice = document.getElementById('computerchoice');

/*
Computer choice
*/

function computerPlay() {
  var pick = choices[Math.floor(Math.random() * choices.length)];
  return pick;
}

/*
Resets all Global Variables
*/

function resetGlobalVariables() {
    playerCount = 0;
    computerCount = 0;
    playerscore.textContent = 0;
    computerScore.textContent = 0;
}

/*
Restarts game
*/

function replay() {
  resetGlobalVariables();
  document.getElementById('1').style.display = 'inline-block';
  document.getElementById('2').style.display = 'inline-block';
  document.getElementById('3').style.display = 'inline-block';
  document.getElementById('replay').style.display = 'none';
  msg.textContent = "Here we go again. Good luck!"
}

/*
Button function
*/

let playerCount = 0;
let computerCount = 0;


/*
Game and rounds
*/

function game(choice) {

    document.getElementById("msg").style.fontSize = "xx-large";
    document.getElementById("msg").style.paddingTop = "21px";

  if (choice === 1) {

    computerSelection = computerPlay();

    if (computerSelection === 'scissors') {
      playerCount++;
      playerScore.textContent = playerCount;
      msg.textContent = "Rock obliterates Scissors. You win!";
    } else if (computerSelection === 'paper') {
      computerCount ++;
      computerScore.textContent = computerCount;
      msg.textContent = "Paper tops Rock. You lose.";
    } else {
      msg.textContent = "Womp womp, it's a tie..."
    }

    playerChoice.textContent = 'ROCK';
    computerChoice.textContent = computerSelection.toUpperCase();


  }


  if (choice === 2) {

    computerSelection = computerPlay();

    if (computerSelection === 'rock') {
      playerCount++;
      playerScore.textContent = playerCount;
      msg.textContent = "Paper covers Rock. You win!";
    } else if (computerSelection === 'scissors') {
      computerCount ++;
      computerScore.textContent = computerCount;
      msg.textContent = "Scissors snips Paper. You lose.";
    } else {
      msg.textContent = "It's a tie. You'll get it next time!"
    }

    playerChoice.textContent = 'PAPER';
    computerChoice.textContent = computerSelection.toUpperCase();


  }


  if (choice === 3) {
    computerSelection = computerPlay();

    if (computerSelection === 'paper') {
      playerCount++;
      playerScore.textContent = playerCount;
      msg.textContent = "Scissors cuts Paper. You win!";
    } else if (computerSelection === 'rock') {
      computerCount ++;
      computerScore.textContent = computerCount;
      msg.textContent = "Rock smashes Scissors. You lose.";
    } else {
      msg.textContent = "It's a tie. Try again."
    }

    playerChoice.textContent = 'SCISSORS';
    computerChoice.textContent = computerSelection.toUpperCase();

  }

  if (playerCount === 5) {
    document.getElementById('1').style.display = 'none';
    document.getElementById('2').style.display = 'none';
    document.getElementById('3').style.display = 'none';
    document.getElementById('replay').style.display = 'inline-block';
    msg.textContent = "YOU DID IT!"
  } else if (computerCount === 5) {
    document.getElementById('1').style.display = 'none';
    document.getElementById('2').style.display = 'none';
    document.getElementById('3').style.display = 'none';
    document.getElementById('replay').style.display = 'inline-block';
    msg.textContent = "YOU LOSE."
  }

}
