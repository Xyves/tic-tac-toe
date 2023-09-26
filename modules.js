export const board = ["", "", "", "", "", "", "", "", ""];
export function updateBoard(index, currentPlayer) {
  board[index] = currentPlayer;
}
export const win = [
  [1, 2, 3],
  [(4, 5, 6)],
  [(7, 8, 9)],
  [(1, 4, 7)],
  [(2, 5, 8)],
  [(3, 6, 9)],
  [(1, 5, 9)],
  [(3, 5, 7)],
];
export let isGameActive = true;
export let result = {};
