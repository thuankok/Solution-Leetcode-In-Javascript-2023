// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description

var removeDuplicates = function(nums) {
    // Because arrays sorted, I need used to case it
    let pointer = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i < 2 || nums[i] > nums[pointer - 2]) {
            nums[pointer] = nums[i];
            pointer++;
        }
    }

    return pointer;

};
