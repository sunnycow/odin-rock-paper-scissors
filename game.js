function getComputerChoice() {
  const variants = ["rock", "paper", "scissors"];
  return variants[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  const userChoice = prompt("enter your choice (rock, paper or scissors)").toLowerCase();

  if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
    return userChoice;
  } else {
    throw new Error("Invalid value");
  }
}

let userScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    return;
  }

  if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      console.log("You win! Rock beats Scissors");
      userScore++;
    } else {
      console.log("You lose! Paper beats Rock");
      computerScore++;
    }
  }

  if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      console.log("You win! Paper beats Rock");
      userScore++;
    } else {
      console.log("You lose! Scissors beat Paper");
      computerScore++;
    }
  }

  if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      console.log("You win! Scissors beat Paper");
      userScore++;
    } else {
      console.log("You lose! Rock beats Scissors");
      computerScore++;
    }
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);