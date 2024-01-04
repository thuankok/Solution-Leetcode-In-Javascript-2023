//https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/description

var minOperations = function(nums) {
    let dict = {};
    let ans = 0;
    for(let num of nums){
        dict[num] = dict[num] ? dict[num] + 1:  1; 
    }

    for (let [_, value ] of Object.entries(dict)){
        if(value === 1) return -1;
        ans += Math.trunc(value/3);  
        ans += value%3 ==0 ? 0: 1; 
    }
    return ans;
};
