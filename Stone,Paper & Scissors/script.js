let userScore = 0;
let compScore = 0;

// Selecting score elements
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Selecting all choice buttons (rock, paper, scissors) and message display
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

// Function to generate computer's random choice
const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return option[randomIdx];
};

// Function for a draw scenario
const drawGame = () => {
    msg.style.backgroundColor = "#081b31";
    msg.innerText = "Game was draw. Try again!";
}

// Function to show the winner and update the score
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    } else {
        msg.innerText = `You lose, ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
}

// Function to handle the game logic when the user makes a choice
const playGame = (userChoice) => {           
    const compChoice = genCompChoice();
    
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;  
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else if (userChoice === "scissors") {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

// Adding event listeners to each choice button
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
