// https://leetcode.com/problems/jump-game/description

var canJump = function(nums) {
    let temp=nums[0];
    for(let i=1; i<nums.length; i++){
        if(temp===0) return false;
        temp= Math.max(temp-1, nums[i]);
    }
    return true;
};
