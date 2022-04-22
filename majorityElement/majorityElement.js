function majorityElement(nums) {
    const numCounts = {};
    for (let index = 0; index < nums.length; index++) {
        if (!numCounts[nums[index]]) {
            numCounts[nums[index]] = 1;
        }
        else {
            numCounts[nums[index]]++;
        }
        if (numCounts[nums[index]] > nums.length / 2) {
            return nums[index];
        }
    }
}

let mer1 = majorityElement([3, 2, 3]);
console.log(mer1);
//# sourceMappingURL=majorityElement.js.map