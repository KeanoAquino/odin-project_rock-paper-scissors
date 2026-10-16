function getComputerChoice() {
    let choice = (Math.floor(Math.random() * 3) + 1);

    switch(choice) {
        case 1:
            choice = "rock";

            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;
    }

    return choice;
}

function displayResult(humanChoice, computerChoice, result) {
    let resultText = "";
    let humanChoiceEmoji = document.querySelector(".user .choice");
    let computerChoiceEmoji = document.querySelector(".cpu .choice");

    switch(humanChoice) {
        case "rock":
            humanChoiceEmoji.textContent = rockEmoji;
            break;
        case "paper":
            humanChoiceEmoji.textContent = paperEmoji;
            break;
        case "scissors":
            humanChoiceEmoji.textContent = scissorsEmoji;
            break;
    }

    switch(computerChoice) {
        case "rock":
            computerChoiceEmoji.textContent = rockEmoji;
            break;
        case "paper":
            computerChoiceEmoji.textContent = paperEmoji;
            break;
        case "scissors":
            computerChoiceEmoji.textContent = scissorsEmoji;
            break;
    }

    switch(computerChoice) {

    }

    switch(result) {
        case "win":
            resultText = `You win!, ${humanChoice} beats ${computerChoice}`;
            break;
        case "lose":
            resultText = `You lose!, ${computerChoice} beats ${humanChoice}`;
            break;
        case "draw":
            resultText = `Draw!, ${humanChoice} equals ${computerChoice}`;
            break;
    }
    console.log(`YOU: ${humanChoice}, CPU: ${computerChoice}\n${resultText}`);
}

function displayScore() {
    console.log(`Total score, you: ${playerScore}, cpu: ${computerScore}`);
}


function playRound(humanChoice, computerChoice) {
    let humanResult = "";

    lowercase_humanChoice = humanChoice.toLowerCase();

    switch(lowercase_humanChoice) {
        case "rock":
            switch(computerChoice){
                case "rock":
                    humanResult = "draw"
                    displayResult(lowercase_humanChoice, computerChoice, humanResult);
                    break;
                case "paper":
                    humanResult = "lose"
                    displayResult(lowercase_humanChoice, computerChoice, humanResult);
                    break;
                case "scissors":
                    humanResult = "win"
                    displayResult(lowercase_humanChoice, computerChoice, humanResult);
                    break;
            }
            break;
        case "paper":
            switch(computerChoice){
                case "rock":
                    humanResult = "win"
                    displayResult(lowercase_humanChoice, computerChoice, humanResult);
                    break;
                case "paper":
                    humanResult = "draw"
                    displayResult(lowercase_humanChoice, computerChoice, humanResult);
                    break;
                case "scissors":
                    humanResult = "lose"
                    displayResult(lowercase_humanChoice, computerChoice, humanResult);
                    break;
            }
            break;
        case "scissors":
            switch(computerChoice){
                case "rock":
                    humanResult = "lose"
                    displayResult(lowercase_humanChoice, computerChoice, humanResult);
                    break;
                case "paper":
                    humanResult = "win"
                    displayResult(lowercase_humanChoice, computerChoice, humanResult);
                    break;
                case "scissors":
                    humanResult = "draw"
                    displayResult(lowercase_humanChoice, computerChoice, humanResult);
                    break;
            }
            break;
    }
    
    if (humanResult === "win") {
        playerScore++;
    }
    else if (humanResult === "lose") {
        computerScore++;
    }
    
    displayScore();
}


const rockEmoji = "✊";
const paperEmoji = "🖐";
const scissorsEmoji = "✌";
let playerScore = 0;
let computerScore = 0;

const options = document.querySelector(".options");

options.addEventListener("click", (e) => {
    if (e.target.classList.contains("option")){
        let humanChoice = e.target.textContent;
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
})
