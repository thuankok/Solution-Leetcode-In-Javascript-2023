//  https://leetcode.com/problems/n-th-tribonacci-number/description


var tribonacci = function(n) {
    if(n==0) return 0;

    if(n==1 || n==2) return 1;

    const dp= new Array(n+1).fill(0); // This dynamic programing used for memo cache value
    dp[1]=1;
    dp[2]=1;
    for(let i=3;i<=n ; i++){
        dp[i] = dp[i-1]+ dp[i-2] + dp[i-3];
    }
    return dp[n];
};
