// Function to get the computer's choice
function getComputerChoice() {
  const randomChoice = Math.random();
  if (randomChoice < 0.34) {
    return "rock";
  } else if (randomChoice < 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Function to get the human's choice
function getHumanChoice() {
  let choice = prompt("What's your choice?", "rock, paper, or scissors");
  if (choice === null) {
    return "No choice made";
  }
  choice = choice.toLowerCase();
  if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    return "Invalid choice";
  }
  return choice;
}

// Function to play a single round of the game
function playRound() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  if (humanChoice === "No choice made" || humanChoice === "Invalid choice") {
    return "No valid choice was made, please choose rock, paper or scissors!"; // Return the message if no valid choice was made
  } else if (humanChoice === computerChoice) {
    return "It's a tie! Both chose " + humanChoice;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win! " + humanChoice + " beats " + computerChoice;
  } else return "You lose! " + computerChoice + " beats " + humanChoice;
}

console.log("Welcome to Rock, Paper, Scissors!");
console.log("Let's play a round!");

// Variables to keep track of scores
let computerScore = 0;
let humanScore = 0;

// Function to play multiple rounds and keep track of scores
function playGame() {
  for (let i = 0; i < 5; i++) {
    const eachRound = playRound();
    console.log(eachRound);

    if (eachRound.includes("You win")) {
      humanScore++;
    } else if (eachRound.includes("You lose")) {
      computerScore++;
    }
  }

  if (humanScore > computerScore) {
    console.log(
      "Congratulations! You win " + humanScore + " vs " + computerScore
    );
  } else if (humanScore < computerScore) {
    console.log(
      "A-ha! You lose! Computer has beaten you " +
        computerScore +
        " vs " +
        humanScore
    );
  } else console.log("It's a tie! Try to play again and beat the machine!");
}
// Start the game
playGame();
