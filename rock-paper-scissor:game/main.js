function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";
  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "Paper") {
      result = "You win.";
    } else if (computerMove === "Scissors") {
      result = "Tie.";
    }

  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win.";
    } else if (computerMove === "Paper") {
      result = "You Tie.";
    } else if (computerMove === "Scissors") {
      result = "You lose.";
    }
    
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
     result = 'Tie.'
} else if (computerMove === 'Paper') {
    result = 'You loose.';
} else if (computerMove === 'Scissors') {
    result = 'You win.';
}
  }

  alert(`You pick ${playerMove}.Computer picked ${computerMove}.${result}`);
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "Scissors";
  }

  return computerMove;
}
