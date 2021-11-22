/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Will need to recursively determine the various ranges that can be jumped and then jump them because only doing the max jump every time is an unnecessary and inaccurate

var canJump = function (nums) {
  var farthestReach = 0;
  var index = 0;
  while (farthestReach < nums.length && index <= farthestReach) {
    if (index + nums[index] > farthestReach) {
      farthestReach = index + nums[index];
    }
    index++;
  }
  return farthestReach >= nums.length - 1 ? true : false;
};