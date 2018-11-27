
var candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var testBoard = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24, 25, 26, 27],
  [28, 29, 30, 31, 32, 33, 34, 35, 36],
  [37, 38, 39, 40, 41, 42, 43, 44, 45],
  [46, 47, 48, 49, 50, 51, 52, 53, 54],
  [55, 56, 57, 58, 59, 60, 61, 62, 63],
  [64, 65, 66, 67, 68, 69, 70, 71, 72],
  [73, 74, 75, 76, 77, 78, 79, 80, 81]
];

function range(size, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt);
}

function createBoard() {
  const board = [];
  const row = new Array(9).fill(0);
  return range(9).map(() => row);
}
 

function isBoardComplete(board) {
  for (let row of board) {
    if (row.includes(0)) {
      return false;
    }
  }
  return true;
}

function getColumn(board, col) {
  return board.map((row) => row[col]);
}

function getRow(board, row) {
  return board[row];
}

function getSector(board, r, c) {
  const row = r % 3 === 0 ? r : r - (r % 3);
  const col = c % 3 === 0 ? c : c - (c % 3);

  return board[row].slice(col, col+3)
    .concat(board[row+1].slice(col, col+3))
    .concat(board[row+2].slice(col, col+3));
}

function shuffle(arr) {
  var elementsToShuffle = arr.length;
  var tempValue, index;

  // While there remain elements to shuffle…
  while (elementsToShuffle) {
    // Pick a remaining element…
    index = Math.floor(Math.random() * elementsToShuffle--);

    // And swap it with the current element.
      tempValue = arr[elementsToShuffle];
      arr[elementsToShuffle] = arr[index];
      arr[index] = tempValue;
    }
    return arr;
  }

const board = testBoard;
console.log(getSector(board, 8, 7));
