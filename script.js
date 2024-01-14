import {
  board,
  updateBoard,
  isGameActive,
  resetBoardToDefault,
} from "./module.js";

const cells = Array.from(document.querySelectorAll(".cell"));
const restartBtn = document.querySelector("#restart-btn");
const winningMsg = document.querySelector(".winning-message");
const player1 = createPlayer("X").symbol;
const player2 = createPlayer("O").symbol;
let currentPlayer = player1;

function createPlayer(symbol) {
  return { symbol: symbol };
}

// Add event click on every cell
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", isValidAction);
}

function isValidAction() {
  const index = this.getAttribute("cellIndex");
  if (isGameActive && cells[index].textContent !== "") {
    return false;
  }
  takeTurn(index);
}

// Change the player
function takeTurn(index) {
  if (isGameActive) {
    cells[index].textContent = currentPlayer;
    updateBoard(index, currentPlayer);
    if (isGameWon(board)) {
      disableCells();
    } else if (isTie()) {
      winningMsg.textContent = "It's a tie!!!";
    } else {
      switchPlayer();
    }
  }
}

function isGameWon(board) {
  let winner;
  const winningPatterns = [
    [board[0], board[1], board[2]],
    [board[3], board[4], board[5]],
    [board[6], board[7], board[8]],
    [board[0], board[3], board[6]],
    [board[1], board[4], board[7]],
    [board[2], board[5], board[8]],
    [board[0], board[4], board[8]],
    [board[2], board[4], board[6]],
  ];
  for (const condition of winningPatterns) {
    // Player X wins
    if (condition.every((element) => element === "X")) {
      winningMsg.textContent = "Player 1 has won!";
      return true;
    }
    // Player O wins
    if (condition.every((element) => element === "O")) {
      winningMsg.textContent = "Player 2 has won!";
      return true;
    }
  }
  return winner;
}

function switchPlayer() {
  if (currentPlayer == player1) {
    currentPlayer = player2;
  } else if (currentPlayer == player2) {
    currentPlayer = player1;
  } else {
    console.log("Error!");
  }
}

restartBtn.addEventListener("click", ()=>{
    resetBoardToDefault();
    enableCells();
    winningMsg.textContent = "";
    for (const cell of cells) {
      cell.textContent = "";
  }
})

function isTie() {
  return (
    board.every((cell) => cell === "X" || cell === "O") && !isGameWon(board)
  );
}
function disableCells() {
  for (const cell of cells) {
    cell.removeEventListener("click", isValidAction);
  }
}
function enableCells() {
  for (const cell of cells) {
    cell.addEventListener("click", isValidAction);
  }
}
