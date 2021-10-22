/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  // Find all perfect squares between the constraints, 1 - 1000
  // Iterate through the perfect squares highest to lowest, calculating the different combinations
  // As the solution is found, compare it's length against the variable tracking the current shortest length
  // Return that number
  var perfectSquares = [];
  var squareCounts = [];
  var squaresLeft = true;
  var number = 1;
  while (squaresLeft) {
    if (number * number <= n) {
      perfectSquares.unshift(number * number);
      number++;
    } else {
      squaresLeft = false;
    }
  }
  console.log(perfectSquares);

};

var psc1 = numSquares(900);