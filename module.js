export let board = ["", "", "", "", "", "", "", "", ""];
export function updateBoard(index, currentPlayer) {
  board[index] = currentPlayer;
}
export let isGameActive = true;
export let result = {};
export function resetBoardToDefault() {
  board = ["", "", "", "", "", "", "", "", ""];
}
