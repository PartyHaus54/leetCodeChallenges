var minimumDifference = (nums) => {
  var minDifference = null;

  for (var index1 = 0; index1 < nums.length; index1++) {
    for (var index2 = 0; index2 < nums.length; index2++) {
      if (index1 !== index2) {
        if (!minDifference) {
          minDifference = Math.abs(nums[index2] - nums[index1]);
        } else {
          if (Math.abs(nums[index2] - nums[index1]) < minDifference) {
            minDifference = Math.abs(nums[index2] - nums[index1]);
          }
        }
      }
    }
  }

  return minDifference;
}

var test1 = minimumDifference([2, 4, 5, 9, 7]);
console.log(test1);
// 1

var test2 = minimumDifference([3, 10, 8, 6]);
console.log(test2);
// 2

// Input: nums = [2, 4, 5, 9, 7]
// Output: 1
// Explanation: Difference between 5 and 4 is 1.
// Example 2:

// Input: nums = [3, 10, 8, 6]
// Output: 2
// Explanation: Difference between 8 and 6 is 2.