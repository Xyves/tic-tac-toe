const cells = Array.from(document.querySelectorAll(".cell"));
const statusText = document.querySelector(".statusText");
const restartBtn = document.querySelector("#restart-btn");

const board = ["", "", "", "", "", "", "", "", ""];
let players = ["X", "O"];
let currentPlayer = players[0];
isGameActive = true;

const isValidAction = (cell) => {
  if (cell.innerText === "X" || cell.innerText === "O") {
    return false;
  }
  return true;
};

// const updateBoard = (index){
//   board[index] = currentPlayer
// }
result = {};
win = [
  [1, 2, 3],
  [(4, 5, 6)],
  [(7, 8, 9)],
  [(1, 4, 7)],
  [(2, 5, 8)],
  [(3, 6, 9)],
  [(1, 5, 9)],
  [(3, 5, 7)],
];
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", takeTurn);
}
function startGame() {}

function takeTurn() {
  const index = this.getAttribute("cellIndex");
  console.log(index);
  console.log("box clicked");
  cells[index].textContent = currentPlayer;
  switchPlayer();
}
function switchPlayer() {
  if (currentPlayer == players[0]) {
    currentPlayer = players[1];
    console.log("text");
  } else if (currentPlayer == players[1]) {
    currentPlayer = players[0];
  } else {
    console.log("Error!");
  }
}
// startGame();
// function startGame() {
//   cells.forEach((cells) => cells.addEventListener("click", cellClicked));
//   restartBtn.addEventListener("click", restartGame);
//   statusText.textContent = `${currentPlayer}`;
// }
function cellClicked() {
  cellIndex = this.getAttribute("cellIndex");
}
const game = () => {
  const gameBoard = [];
};
function restartGame() {}
function add(e) {
  console.log(e.target);
}
