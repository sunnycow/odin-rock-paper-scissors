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