package com.example.java;

import java.util.Arrays;

public class ElementRemover {
    public int removeElement(int[] nums, int val) {
        int processedIndex = 0;
        for (int index = 0; index < nums.length; index++) {
            if (nums[index] != val) {
                nums[processedIndex] = nums[index];
                processedIndex++;
            }
        }
        System.out.println(Arrays.toString(nums));
        return processedIndex;
    }
}
