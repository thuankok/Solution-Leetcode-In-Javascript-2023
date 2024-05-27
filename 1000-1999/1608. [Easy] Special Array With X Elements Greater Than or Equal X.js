//    https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/description

var specialArray = function(nums) {
    nums.sort((a,b)=>a -b);
    const n = nums.length;
    if (nums[0] >= n) return n;
    for(let i= 1; i<= n; i++){
        if (nums[n - i] >= i && (n - i - 1 < 0 || nums[n - i - 1] < i)) {
                return i;
        }
    }

    return -1;
};
