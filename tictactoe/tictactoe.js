/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
  // Player A = X's || Player B = Y's
  var winner = 'Draw';

  var rows = [[], [], []];
  var columns = [[], [], []];
  var slashDiagonal = [];
  var backslashDiagonal = [];

  var performMove = (coord, turnIndex) => {
    if (turnIndex % 2 === 0) {
      var playerPiece = 'X';
    } else {
      var playerPiece = 'O';
    }
    rows[coord[1]][coord[0]] = playerPiece;
    columns[coord[0]][coord[1]] = playerPiece;
    if (coord[0] === coord[1]) {
      backslashDiagonal[coord[0]] = playerPiece;
    }

    if (coord[0] === 0 && coord[1] === 2) {
      slashDiagonal[0] = playerPiece;
    }
    if (coord[0] === coord[1] && coord[0] === 1) {
      slashDiagonal[1] = playerPiece;
    }
    if (coord[0] === 2 && coord[1] === 0) {
      slashDiagonal[2] = playerPiece;
    }
  }

  moves.forEach((coordinate, index) => {
    performMove(coordinate, index);
  });

  rows.forEach(row => {
    if (row.join('') === 'XXX') {
      winner = 'A';
    }
    if (row.join('') === 'OOO') {
      winner = 'B';
    }
  });

  columns.forEach(column => {
    if (column.join('') === 'XXX') {
      winner = 'A';
    }
    if (column.join('') === 'OOO') {
      winner = 'B';
    }
  });

  if (slashDiagonal.join('') === 'XXX') {
    winner = 'A';
  }
  if (slashDiagonal.join('') === 'OOO') {
    winner = 'B';
  }
  if (backslashDiagonal.join('') === 'XXX') {
    winner = 'A';
  }
  if (backslashDiagonal.join('') === 'OOO') {
    winner = 'B';
  }

  return winner;
};

module.exports = tictactoe;