/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Will need to recursively determine the various ranges that can be jumped and then jump them because only doing the max jump every time is an unnecessary and inaccurate

var canJump = function (nums) {
  var allJumpOptions = [];
  var jumpFrom = (index) => {
    var landingIndex = index + nums[index];
    //
    if (landingIndex >= nums.length - 1) {
      return true;
    } else if (landingIndex > index) {
      return jumpFrom(landingIndex);
    } else {
      return false;
    };
  }
  return jumpFrom(0);
};