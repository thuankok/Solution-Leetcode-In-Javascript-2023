// https://leetcode.com/problems/climbing-stairs/description

var climbStairs = function(n) {

    return memoFunc(n, {});
    
};

const memoFunc = (n, memo) => {
    if(n in memo) return memo[n];
    if(n == 0) return 0;
    if(n == 1) return 1;
    if(n == 2) return 2;

    memo[n] = memoFunc(n - 1, memo) + memoFunc(n - 2, memo);
    return memo[n];
};
