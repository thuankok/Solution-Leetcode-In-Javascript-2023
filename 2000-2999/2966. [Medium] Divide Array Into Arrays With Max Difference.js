// https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/description

var divideArray = function(nums, k) {
     const size = nums.length;
        if (size % 3 !== 0)
            return [];

        nums.sort((a, b) => a - b);

        const result = [];

        for (let i = 0; i < size; i += 3) {
            if (i + 2 < size && nums[i + 2] - nums[i] <= k) {
                result.push([nums[i], nums[i + 1], nums[i + 2]]);
            } else {
                return [];
            }
        }
        return result;
};
