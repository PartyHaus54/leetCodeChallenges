/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  var stairs = 0;
  var coins = 0;
  while (coins + stairs < n) {
    stairs++;
    coins += stairs;
  }
  return stairs;
};

var r1 = arrangeCoins(1);
console.log(r1);

var r2 = arrangeCoins(2);
console.log(r2);

var r3 = arrangeCoins(3);
console.log(r3);

var r5 = arrangeCoins(5);
console.log(r5);

var r8 = arrangeCoins(8);
console.log(r8);