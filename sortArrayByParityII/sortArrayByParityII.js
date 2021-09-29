/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  var parityArray = [];
  var evenIndex = 0;
  var oddIndex = 0;
  nums.forEach(number => {
    if (number % 2 === 0) {
      parityArray[evenIndex * 2] = number;
      evenIndex++;
    } else {
      parityArray[oddIndex * 2 + 1] = number;
      oddIndex++;
    }
  });
  return parityArray;
};