function singleNumber(nums: number[]): number {
  let counts: any = {};

  function toggleNumber(num: number) {
    if (counts[num]) {
      delete counts[num];
    } else {
      counts[num] = 1;
    }
  }

  nums.forEach(num => {
    toggleNumber(num);
  });

  return Number(Object.keys(counts)[0]);
};

let snr1 = singleNumber([1, 5, 5, 2, 2, 1, 3, 6, 6]);
console.log(snr1);