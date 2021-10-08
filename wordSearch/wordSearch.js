/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  var pathSignatures = [];
  var strings = [];

  var extendPath = (path, x, y) => {
    var extendedPath = path.slice();
    if (!path.includes(`${x},${y}`)) {
      extendedPath.push(`${x},${y}`);
    }
    var nextCells = [];
    if (x - 1 >= 0 && !path.includes(`${x - 1},${y}`)) {
      nextCells.push([x - 1, y]);
    }

    if (x + 1 < board[0].length && !path.includes(`${x + 1},${y}`)) {
      nextCells.push([x + 1, y]);
    }

    if (y - 1 >= 0 && !path.includes(`${x},${y - 1}`)) {
      nextCells.push([x, y - 1]);
    }

    if (y + 1 < board.length && !path.includes(`${x},${y + 1}`)) {
      nextCells.push([x, y + 1]);
    }

    if (nextCells.length > 0) {
      nextCells.forEach(cell => {
        extendPath(extendedPath, cell[0], cell[1]);
      });
    } else {
      pathSignatures.push(extendedPath);
    }
  };

  var convertPathsToStrings = (paths) => {
    paths.forEach(path => {
      var string = '';
      path.forEach(cell => {
        var coordinateString = cell.split(',');
        coordinate = {
          x: Number(coordinateString[0]),
          y: Number(coordinateString[1])
        };
        string += board[coordinate.y][coordinate.x];
      });
      strings.push(string);
    });
  };

  var reverseString = (string) => {
    var reversedString = '';
    for (var index = string.length - 1; index >= 0; index--) {
      reversedString += string[index];
    }
    strings.push(reversedString);
  }

  extendPath([], 0, 0);
  //extendPath([], board[0].length - 1, board.length - 1);
  convertPathsToStrings(pathSignatures);
  var hasWord = false;
  strings.forEach(string => {
    if (string.indexOf(word) > -1) {
      hasWord = true;
    }
  });

  return hasWord;
};

var r1 = exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED");
console.log(r1);

var r2 = exist([["b", "b", "a", "a", "b", "a"], ["b", "b", "a", "b", "a", "a"], ["b", "b", "b", "b", "b", "b"], ["a", "a", "a", "b", "a", "a"], ["a", "b", "a", "a", "b", "b"]], "abbbababaa");
console.log(r2);