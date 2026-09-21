function getComputerChoice() {
    let choice = (Math.random() * 100);

    if (choice <= 33.33333333333333) {
        choice = "rock";
    } else if (choice > 33.33333333333333 && choice <= 66.66666666666666) {
        choice = "paper";
    } else {
        choice = "scissors"
    }

    return choice;
}


function getHumanChoice() {
    let choice = prompt("Please enter 1 (rock), 2 (paper) or 3 (scissors): ");

    switch(choice) {
        case "1":
            choice = "rock";
            break;
        case "2":
            choice = "paper";
            break;
        case "3":
            choice = "scissors";
            break;
    }

    return choice;
}


function displayResult(humanChoice, computerChoice, result) {
    let resultText = "";

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


function displayGameResult(playerScore, computerScore){
    if (playerScore > computerScore) {
        console.log(`You win the game! Final Score: ${playerScore}-${computerScore}`);
    }
    else if (playerScore < computerScore) {
        console.log(`You win the lose! Final Score: ${playerScore}-${computerScore}`);
    }
    else {
        console.log(`Draw Game! Final Score: ${playerScore}-${computerScore}`);
    }
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
    return humanResult;
}


function playGame() {
    let playerScore = "0";
    let computerScore = "0";
    
    for (i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);
        if (result === "win"){
            playerScore++;
        }
        else if (result === "lose"){
            computerScore++;
        }
    }

    displayGameResult(playerScore, computerScore);
}

playGame();
