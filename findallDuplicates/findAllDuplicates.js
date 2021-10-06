/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  var counts = {};
  var duplicates = [];
  nums.forEach(number => {
    if (counts[number]) {
      duplicates.push(number);
    } else {
      counts[number] = 1;
    }
  });

  return duplicates;
};