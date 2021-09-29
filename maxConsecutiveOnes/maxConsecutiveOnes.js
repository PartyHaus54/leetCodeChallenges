/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  var maxConsecutive = 0;
  var streak = 0;
  nums.forEach(num => {
    if (num === 1) {
      streak++;
      if (streak > maxConsecutive) {
        maxConsecutive = streak;
      }
    } else {
      streak = 0;
    }
  });
  return maxConsecutive;
};