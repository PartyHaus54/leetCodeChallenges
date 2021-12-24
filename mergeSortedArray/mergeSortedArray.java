package com.example.java;

import java.util.Arrays;

public class MergeSortedArray {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int[] mergedArray = new int[nums1.length + nums2.length];
        int index1 = 0;
        int index2 = 0;
        while (m > 0 || n > 0) {
            if (m == 0) {
                nums1[index1] = nums2[index2];
                n--;
                index1++;
                index2++;
            } else if (n == 0) {
                m = 0;
            } else if (nums1[index1] <= nums2[index2]) {
                index1++;
                m--;
            } else if (nums2[index2] < nums1[index1]) {
                slideRight(index1, nums1);
                nums1[index1] = nums2[index2];
                n--;
                index1++;
                index2++;
            }
        }
        System.out.println(Arrays.toString(nums1));
    }

    public void slideRight(int originIndex, int[] array) {
        for (int index = array.length - 1; index  > originIndex; index--) {
            array[index] = array[index -1];
        }
    }
}
