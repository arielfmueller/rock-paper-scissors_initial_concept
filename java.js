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

// Function to play a single round of the game
function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  if (humanChoice === computerChoice) {
    return "It's a tie! Both chose " + humanChoice;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win, " + humanChoice + " beats " + computerChoice;
  } else {
    return "You lose, " + computerChoice + " beats " + humanChoice;
}}


// Variables to keep track of scores
let computerScore = 0;
let humanScore = 0;
let roundsPlayed = 0;

// Linking variables from the document to java and adding event listeners
const divTitle = document.querySelector(".title")
divTitle.textContent = "Welcome to Rock, Paper, Scissors! Let's play a round!"

const divResult = document.querySelector(".result")

const btnRock = document.querySelector(".rock")
btnRock.addEventListener("click", () => {
  handleRound("rock")
})

const btnPaper = document.querySelector(".paper")
btnPaper.addEventListener("click", () => {
  handleRound("paper")
})

const btnScissors = document.querySelector(".scissors")
btnScissors.addEventListener("click", () => {
  handleRound("scissors")
})

// Function to keep track of the rounds played
function handleRound(choice) {
  if (roundsPlayed >= 5) return;
  
  const result = playRound(choice);
  const p = document.createElement("p");
  p.textContent = result;
  divResult.appendChild(p);

  if (result.includes("You win")) {
    humanScore++;
  } else if (result.includes("You lose")) {
    computerScore++;
  }

  roundsPlayed++;

  if (roundsPlayed === 5) {
    const summary = document.createElement("p")
    
    if (humanScore > computerScore) {
      summary.textContent = "Congratulations! You win " + humanScore + " vs " + computerScore + "!";
    } else if (humanScore < computerScore) {
      summary.textContent = "A-ha! You lose! Computer has beaten you " + computerScore + " vs " + humanScore + "!";
    } else {
      summary.textContent = "It's a tie! Try to play again and beat the machine!"
    }
    divResult.appendChild(summary)

    const resetBtn = document.createElement("button")
    divResult.appendChild(resetBtn)
    resetBtn.textContent = "Reset"

    resetBtn.addEventListener("click", () => {
      resetGame()
    })
  }
}

// Function to reset game
function resetGame() {
  humanScore = 0;
  computerScore = 0;
  roundsPlayed = 0;

  divResult.textContent = ""
}