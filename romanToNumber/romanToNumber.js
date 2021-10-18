/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var numeralValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  var numeralRanks = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  var number = 0;
  var adjustor = 0;
  var adjustorNumeral = '';
  for (var numeralIndex = 0; numeralIndex < s.length; numeralIndex++) {
    if (s[numeralIndex] !== adjustorNumeral) {
      number += adjustor;
      if (numeralIndex > 0 && numeralRanks.indexOf(s[numeralIndex]) > numeralRanks.indexOf(adjustorNumeral)) {
        number -= 2 * adjustor;
      }
      adjustorNumeral = s[numeralIndex];
      adjustor = numeralValues[adjustorNumeral];
    } else {
      adjustor += numeralValues[adjustorNumeral];
    }
    if (numeralIndex === s.length - 1) {
      number += adjustor;
    }
  }
  return number;
};

var r1 = romanToInt("III");
console.log(r1);
// 3
var r2 = romanToInt("IV");
console.log(r2);
// 4
var r3 = romanToInt("IX");
console.log(r3);
// 9
var r4 = romanToInt("LVIII");
console.log(r4);
// 58
var r5 = romanToInt("MCMXCIV");
console.log(r5);
// 1984