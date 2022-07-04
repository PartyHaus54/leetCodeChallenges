public class DuplicateRemover {
    public int removeDuplicates(int[] nums) {
        int sortIndex = 0;
        for (int processIndex = 1; processIndex < nums.length; processIndex++) {
            if (nums[processIndex] != nums[sortIndex]) {
                sortIndex++;
                nums[sortIndex] = nums[processIndex];
            }
        }
        return sortIndex + 1;
    }
}