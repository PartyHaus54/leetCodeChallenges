/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  var prefix = '';
  var charIndex = 0;
  var done = false;
  while (!done) {
    var currentChar = undefined;
    strs.forEach((string, sIndex) => {
      if (!currentChar) {
        currentChar = string[charIndex];
      }
      if (charIndex >= string.length || string[charIndex] !== currentChar) {
        done = true;
        return prefix;
      } else if (sIndex === strs.length - 1 && string[charIndex] === currentChar && !done) {
        prefix += currentChar;
      }
    });
    charIndex++;
  }
  return prefix;
};

var r1 = longestCommonPrefix(["flower", "flow", "flight"]);
console.log(r1);

var r2 = longestCommonPrefix(["dog", "racecar", "car"]);
console.log(r2);

var r3 = longestCommonPrefix(["flower", "flow", "flowers"]);
console.log(r3);

var r4 = longestCommonPrefix([""]);
console.log(r4);