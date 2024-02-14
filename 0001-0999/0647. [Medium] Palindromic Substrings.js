//  https://leetcode.com/problems/palindromic-substrings/description

var countSubstrings = function(s) {
    let n = s.length;
    let ans = 0;

    if (n <= 0)
        return 0;

    let dp = new Array(n).fill(false).map(() => new Array(n).fill(false));

    for (let i = 0; i < n; ++i, ++ans)
        dp[i][i] = true;

    for (let i = 0; i < n - 1; ++i) {
        dp[i][i + 1] = (s[i] === s[i + 1]);
        ans += (dp[i][i + 1] ? 1 : 0);
    }

    for (let length = 3; length <= n; ++length)
        for (let i = 0, j = i + length - 1; j < n; ++i, ++j) {
            dp[i][j] = dp[i + 1][j - 1] && (s[i] === s[j]);
            ans += (dp[i][j] ? 1 : 0);
        }

    return ans;
};
