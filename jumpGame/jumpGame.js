/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  var canJumpNext = (index) => {
    if (index + nums[index] >= nums.length) {
      return true;
    } else if (nums[index] > 0) {
      return canJumpNext(index + nums[index]);
    } else {
      return false;
    }
  }
  return canJumpNext(0);
};

var r1 = canJump([2, 3, 1, 1, 4]);
console.log(r1);