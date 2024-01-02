// https://leetcode.com/problems/two-sum/description

var twoSum = function(nums, target) {
    dict = {};
    for( let [index,num] of nums.entries()){
        if(dict?.[target-num] !== undefined ){
            return [dict[target-num],index] ;
        }else{
          
            dict[num] = index;
        }
    }
};
