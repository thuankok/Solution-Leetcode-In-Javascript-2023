// https://leetcode.com/problems/majority-element/description

var majorityElement = function(nums) {
    let el;
    let cnt = 0;
    for(let i=0;i<=nums.length-1;i++){
        if(cnt===0){
            cnt = 1;
            el = nums[i]
        }else if(nums[i]===el){
            cnt++
        }else{
            cnt--
        }
    }
    return el;
};
