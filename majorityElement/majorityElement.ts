function majorityElement(nums: number[]): number {
  const numCounts = {};

  for (let index: number = 0; index < nums.length; index++) {
    if (!numCounts[nums[index]]) {
      numCounts[nums[index]] = 1;
    } else {
      numCounts[nums[index]]++;
    }
    if (numCounts[nums[index]] > nums.length / 2) {
      return nums[index];
    }
  }
}