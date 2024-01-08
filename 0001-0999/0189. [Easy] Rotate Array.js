// https://leetcode.com/problems/rotate-array/description

var rotate = function(nums, k) {
    let nums2 = new Array(nums.length);
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        nums2[(i + k) % nums.length] = nums[i];
    }
    for (let i = 0; i < nums2.length; i++) {
        nums[i] = nums2[i];
    }
};
