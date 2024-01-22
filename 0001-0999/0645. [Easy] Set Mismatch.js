// https://leetcode.com/problems/set-mismatch/description


var findErrorNums = function(nums) {
    const dictMap = new Map();
        
    for(let i=1 ; i<=nums.length ; i++){
        dictMap.set(i,0);
    }    

    for(let num of nums){
        dictMap.set(num,dictMap.get(num) +1);
    }    
    let ans =[0,0];
    for(let [key, value] of dictMap){
        if(value ===2) ans[0] = key;
        if(value ===0) ans[1] = key;
    }
    
    return ans;
};
