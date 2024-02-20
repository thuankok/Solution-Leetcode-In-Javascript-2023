//   https://leetcode.com/problems/missing-number/description


var missingNumber = function (nums) {
    let numSet = new Set(nums);
    for(let i=0; i<nums.length; i++){
        if(!numSet.has(i)){
            return i
        }
    }
  
    return nums.length;
};
