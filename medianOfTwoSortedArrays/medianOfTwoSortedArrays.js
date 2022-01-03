function findMedianSortedArrays(nums1, nums2) {
    // Middle indices of even numbers is n / 2 and n / 2 - 1 | [0, 1, 2, 3, 4, 5]     : 6 / 2 = 3 and 2
    // so we can stop the loop when the merged array is n / 2 long
    // Middle index of odd numbers is            n / 2 - 0.5 | [0, 1, 2, 3, 4, 5, 6]  : 7 / 2 = 3.5 - 0.5 = 3
    // so we can stop the loop when the merged array n/2 long
    let median;
    let index1 = 0;
    let index2 = 0;
    let targetLength = Math.floor((nums1.length + nums2.length) / 2) + 1;
    let evenLength = (nums1.length + nums2.length) % 2 === 0;
    let nums3 = [];

    if (nums1.length > 0 && nums2.length > 0) {
        while (nums3.length < targetLength) {
            if (nums1[index1] <= nums2[index2] || index2 >= nums2.length) {
                nums3.push(nums1[index1]);
                index1++;
            }
            else {
                nums3.push(nums2[index2]);
                index2++;
            }
        }
    } else if (nums1.length > 0 && nums2.length === 0) {
        while (nums3.length < targetLength) {
            nums3.push(nums1[index1]);
            index1++;
        }
    } else if (nums1.length === 0 && nums2.length > 0) {
        while (nums3.length < targetLength) {
            nums3.push(nums2[index2]);
            index2++;
        }
    }

    if (evenLength) {
        median = (nums3[nums3.length - 1] + nums3[nums3.length - 2]) / 2;
    }
    else {
        median = nums3[nums3.length - 1];
    }
    return median;
}
;
let moftsar1 = findMedianSortedArrays([1, 3], [2]);
console.log(moftsar1 + ' | 2');
let moftsar2 = findMedianSortedArrays([1, 2], [3, 4]);
console.log(moftsar2 + ' | 2.5');
let moftsar3 = findMedianSortedArrays([100001], [100000]);
console.log(moftsar3 + ' | 100000.50000');
let moftsar4 = findMedianSortedArrays([100000], [100001]);
console.log(moftsar4 + ' | 100000.50000');
//# sourceMappingURL=medianOfTwoSortedArrays.js.map