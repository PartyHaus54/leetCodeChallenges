function maxSubArray(nums: number[]): number {
  // Never going to start or end with a negative number
  // Never going to include a span which nets 0
  let totalMax: number = nums[0];

  for (let index: number = 0; index < nums.length; index++) {
    let subIndex: number = index + 1;
    let subMax: number = nums[index];
    let subTotal: number = nums[index];

    while (subTotal > 0 && subIndex < nums.length) {
      subTotal += nums[subIndex];
      if (subTotal > subMax) {
        subMax = subTotal;
      }
      subIndex++
    }

    if (subMax > totalMax) {
      totalMax = subMax;
    }
  }

  return totalMax;
}

let msr1 = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.assert(msr1 === 6, 'Bad');
console.log(msr1);