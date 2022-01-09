function threeSum(nums: number[]): number[][] {
  let triplets : number[][] = [];
  let tripletSignatures : String[] = [];

  for (let i1 : number = 0; i1 < nums.length; i1++) {
    for (let i2: number = 0; i2 < nums.length; i2++) {
      for (let i3: number = 0; i3 < nums.length; i3++) {
        if (nums[i1] + nums[i2] + nums[i3] === 0 && (i1 !== i2 && i1 !== i3 && i2 !== i3)) {
          let triplet : number[] = [nums[i1], nums[i2], nums[i3]];
          let tripletSiganture : String = triplet.sort().join();
          if (!tripletSignatures.includes(tripletSiganture)) {
            triplets.push(triplet);
            tripletSignatures.push(tripletSiganture);
          }
        }
      }
    }
  }

  return triplets;
};