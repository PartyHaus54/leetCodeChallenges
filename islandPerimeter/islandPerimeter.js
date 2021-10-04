/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  var perimeterLength = 0;
  var checkAdjacent = (x, y) => {
    if (x - 1 < 0 || grid[y][x - 1] === 0) {
      perimeterLength++;
    }

    if (x + 1 >= grid[0].length || grid[y][x + 1] === 0) {
      perimeterLength++;
    }

    if (y - 1 < 0 || grid[y- 1][x] === 0) {
      perimeterLength++;
    }

    if (y + 1 >= grid.length || grid[y + 1][x] === 0) {
      perimeterLength++;
    }
  }

  grid.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell === 1) {
        checkAdjacent(x, y);
      }
    });
  });

  return perimeterLength;
};

var perimeterLength = islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]);
console.log(perimeterLength);