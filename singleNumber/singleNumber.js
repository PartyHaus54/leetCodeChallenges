function singleNumber(nums) {
    let counts = {};
    function toggleNumber(num) {
        if (counts[num]) {
            delete counts[num];
        }
        else {
            counts[num] = 1;
        }
    }
    nums.forEach(num => {
        toggleNumber(num);
    });
    return Number(Object.keys(counts)[0]);
}
;
let snr1 = singleNumber([1, 5, 5, 2, 2, 1, 3, 6, 6, 4, 2, 3, 4]);
console.log(snr1);
//# sourceMappingURL=singleNumber.js.map