// https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/description/

var findMatrix = function(nums) {
        let ans =[];
        newSet = new Set(nums);
        while (nums?.length>0){
            newSet = new Set(nums); // Set distinct element in nums;
            ans.push(Array.from(newSet));
            for(let each of Array.from(newSet)){
                    nums?.splice(nums?.indexOf(each),1); //  Remove element selected in answer;
            }
        }
        
        return ans;
};
