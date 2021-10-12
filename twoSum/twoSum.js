/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (var index1 = 0; index1 < nums.length; index1++) {
    for (var index2 = 1; index2 < nums.length; index2++) {
      if (nums[index1] + nums[index2] === target && index1 !== index2) {
        return [index1, index2];
      }
    }
  }
};