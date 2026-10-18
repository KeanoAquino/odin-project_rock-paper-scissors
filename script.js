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

    // Update Emojis
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
    
    // Update Game Text
    switch(result) {
        case "win":
            resultText = `You win! ${humanChoice} beats ${computerChoice}`;
            break;
        case "lose":
            resultText = `You lose! ${computerChoice} beats ${humanChoice}`;
            break;
        case "draw":
            resultText = `Draw! ${humanChoice} equals ${computerChoice}`;
            break;
    }

    let gameText = document.querySelector(".game-text p");
    gameText.textContent = resultText;

    // Legacy Console Logging
    console.log(`YOU: ${humanChoice}, CPU: ${computerChoice}\n${resultText}`);
}

function displayScore() {
    let cpuScr = document.querySelector(".cpu .score");
    let userScr = document.querySelector(".user .score");

    cpuScr.textContent = computerScore;
    userScr.textContent = playerScore;

    // Legacy Console Logging
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
    
    // Update Scores
    if (humanResult === "win") {
        playerScore++;
    }
    else if (humanResult === "lose") {
        computerScore++;
    }
    
    displayScore();

    checkWinner();
}

function checkWinner() {
    let text = document.querySelector(".modal-box .winner-text");
    let score = document.querySelector(".modal-box .final-score");
    let modal = document.querySelector(".modal-overlay");
    if (playerScore === 5 ) {
        modal.classList.add("is-active");
        text.textContent = "You won the game!";
        score.textContent = `Final Score: ${playerScore} - ${computerScore}`;
    }
    else if (computerScore === 5) {
        modal.classList.add("is-active");
        text.textContent = "You lost the game.";
        score.textContent = `Final Score: ${playerScore} - ${computerScore}`;
    }
}

const rockEmoji = "✊";
const paperEmoji = "🖐";
const scissorsEmoji = "✌";
const options = document.querySelector(".options");
const playAgain = document.querySelector(".modal-box");
let playerScore = 0;
let computerScore = 0;

options.addEventListener("click", (e) => {
    if (e.target.classList.contains("option")){
        let humanChoice = e.target.textContent;
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
})

playAgain.addEventListener("click", (e) => {
    if (e.target.classList.contains("play-again")) {
        location.reload();
    }
})
