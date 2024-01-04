// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description

var removeDuplicates = function(nums) {
    let n = nums?.length;
    let m =0;
    let dict= {};
    for (let num of nums){
        dict[num ] = dict[num] ? dict[num] +1: 1;
    }
    
    for(let num of nums){
        if(dict[num] === 1){
            nums[m] = num;
            m++
        }else{
            dict[num]--;
        }
    };
    
    return m;
   
};
