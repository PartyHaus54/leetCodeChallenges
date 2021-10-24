/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  for (var index = nums.length - 1; index >= 0; index--) {
    if (nums[index] === val) {
      nums.splice(index, 1);
    }
  }

  return nums;
};

var r1 = removeElement([3, 2, 2, 3], 3);
console.log(r1);

var r2 = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
console.log(r2);
