import { board, updateBoard, isGameActive, result } from "./modules.js";

const cells = Array.from(document.querySelectorAll(".cell"));
const statusText = document.querySelector(".statusText");
const restartBtn = document.querySelector("#restart-btn");

function createPlayer(symbol) {
  return { symbol: symbol };
}
const player1 = createPlayer("X").symbol;
const player2 = createPlayer("O").symbol;
let currentPlayer = player1;

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", isValidAction);
}

function isValidAction() {
  const index = this.getAttribute("cellIndex");
  if (cells[index].textContent !== "") {
    return false;
  }
  takeTurn(index);
}

function takeTurn(index) {
  if (isGameActive && isGameWon) {
    cells[index].textContent = currentPlayer;
    updateBoard(index, currentPlayer);
    if (!isGameWon(board)) {
      switchPlayer();
    } else {
      let board = null;
      console.log(board);
    }
  } else {
    return error;
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
      console.log(`player1 has won!`);
      return true;
    }
    // Player O wins
    if (condition.every((element) => element === "O")) {
      console.log(`player2 has won!`);
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
