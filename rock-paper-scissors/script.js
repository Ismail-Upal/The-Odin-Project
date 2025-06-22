function getHumanChoice() {
    let answer = prompt("Rock, Paper, or Scissors?");
    return answer.toLowerCase();
}

function getComputerChoice() {
    let num = Math.random();
    if (num <= 0.33) return "rock";
    else if (num <= 0.66) return "paper";
    else return "scissors";
}

let rounds = parseInt(prompt("Number of round you want to play : "));
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log("You chose: " + humanChoice);
    console.log("Computer chose: " + computerChoice);

    if (humanChoice === computerChoice) {
        console.log("Draw...");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win!");
        humanScore++;
    } else {
        console.log("You lose!");
        computerScore++;
    }
    console.log(""); 
}


for (let i = 1; i <= rounds; i++) {
    console.log("Round " + i);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

console.log("Game Over");
console.log("Final Score — You: " + humanScore + " | Computer: " + computerScore);

if (humanScore > computerScore) console.log("🎉 You Won the Game!");
else if (humanScore < computerScore) console.log("💻 Computer Won the Game!");
else console.log("🤝 It's a Draw!");
