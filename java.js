// Function to get the computer's choice



function getComputerChoice() {
    const randomChoice = Math.random()
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

const computerChoice = getComputerChoice() 
const humanChoice = getHumanChoice()

console.log(computerChoice)
console.log(humanChoice)