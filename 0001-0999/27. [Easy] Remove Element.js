// https://leetcode.com/problems/remove-element/description

var removeElement = function(nums, val) {
    let n = nums?.length;
    let m =0;
    for(let i= 0 ; i< n ; i++){
        if(nums[i] !== val){
            nums[m] = nums[i];
            m++
        }
    };
    return m;
};
