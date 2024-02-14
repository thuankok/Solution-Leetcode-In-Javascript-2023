//  https://leetcode.com/problems/rearrange-array-elements-by-sign/description

var rearrangeArray = function(nums) {
    let temp = []
    let posIndex = 0
    let negIndex = 1
    for (let i = 0; i < nums.length; i++) {
        if ( nums[i] < 0) {
            temp[negIndex] = nums[i]
            negIndex+=2
        }else{
            temp[posIndex] = nums[i]
            posIndex+=2
        }
    }

    return temp
    
};
