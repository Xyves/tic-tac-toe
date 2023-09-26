import { board, updateBoard, win, isGameActive, result } from "./modules.js";

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
  if (cells[index].textContent == "X" || cells[index].textContent == "O") {
    return false;
  } else {
    takeTurn(index);
  }
}
function isGameWon() {
  // Porównaj Object(board) z Object(win) jeżeli tak, log wygrałeś = currentPlayer
}
function takeTurn(index) {
  if (isGameActive) {
    cells[index].textContent = currentPlayer;
    updateBoard(index, currentPlayer);
    isGameWon();
    switchPlayer();
  } else {
    return error;
  }
}

function switchPlayer() {
  if (currentPlayer == player1) {
    console.log(player1 + "X");
    currentPlayer = player2;
    console.log("text");
  } else if (currentPlayer == player2) {
    currentPlayer = player1;
  } else {
    console.log("Error!");
  }
}
