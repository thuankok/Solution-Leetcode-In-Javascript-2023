// https://leetcode.com/problems/daily-temperatures/description

var dailyTemperatures = function(temperatures) {
    const n=temperatures?.length;
    const ans = new Array(n).fill(0);
    const stack = [];
    for(let i = 0; i < n; i++){
         while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      let index = stack.pop();
      ans[index] = i - index;
    }
    stack.push(i);
    }

    return ans;
};
