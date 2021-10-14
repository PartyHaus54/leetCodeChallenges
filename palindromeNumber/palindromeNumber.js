/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  var numberIndices = [];
  var numberIndex = 0;
  while (x / Math.pow(10, numberIndex) >= 1) {
    numberIndices[numberIndex] = Math.floor(x / Math.pow(10, numberIndex) % 10);
    numberIndex++;
  }
  console.log(numberIndices);
  var palindrome = true;
  numberIndices.forEach((digit, i) => {
    if (numberIndices[i] !== numberIndices[numberIndices.length - 1 - i]) {
      palindrome = false;
    }
  });
  return palindrome;
};

var r1 = isPalindrome(-1);
console.log(r1);