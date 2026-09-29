// Game state
let playerScore = 0;
let computerScore = 0;

// Available moves for both participants
const MOVES = ["rock", "paper", "scissors"];

// DOM elements
const resultMessage = document.getElementById("result");
const playerScoreElement = document.getElementById("playerScore");
const computerScoreElement = document.getElementById("computerScore");

/**
 * Selects a random move for the computer.
 * @returns {string} The computer's selected move.
 */
function getComputerMove() {
    const randomIndex = Math.floor(Math.random() * MOVES.length);
    return MOVES[randomIndex];
}

/**
 * Determines whether the player's move defeats
 * the computer's move.
 *
 * @param {string} playerMove
 * @param {string} computerMove
 * @returns {boolean}
 */
function playerWins(playerMove, computerMove) {
    return (
        (playerMove === "rock" && computerMove === "scissors") ||
        (playerMove === "paper" && computerMove === "rock") ||
        (playerMove === "scissors" && computerMove === "paper")
    );
}

/**
 * Plays a complete round.
 *
 * @param {string} playerMove - The player's selected move.
 */
function playGame(playerMove) {
    const computerMove = getComputerMove();

    if (playerMove === computerMove) {
        resultMessage.textContent =
            `You chose ${playerMove}. Computer chose ${computerMove}. It's a draw! 🤝`;
    } else if (playerWins(playerMove, computerMove)) {
        playerScore++;

        resultMessage.textContent =
            `You chose ${playerMove}. Computer chose ${computerMove}. You win! 🎉`;
    } else {
        computerScore++;

        resultMessage.textContent =
            `You chose ${playerMove}. Computer chose ${computerMove}. Computer wins! 🤖`;
    }

    updateScoreboard();
}

/**
 * Updates the displayed scores.
 */
function updateScoreboard() {
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
}

/**
 * Resets the entire game state.
 */
function resetGame() {
    playerScore = 0;
    computerScore = 0;

    updateScoreboard();

    resultMessage.textContent = "Choose your move!";
}
