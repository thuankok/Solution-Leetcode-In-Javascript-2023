// https://leetcode.com/problems/out-of-boundary-paths/description

var findPaths = function(m, n, maxMove, startRow, startColumn) {
    const M = 1000000000 + 7;
    let dp = new Array(m).fill(0).map(()=>new Array(n).fill(0));
    dp[startRow][startColumn] = 1;
    let result = 0;
    
    for(let moves=1 ; moves <= maxMove; moves++){
        let temp= new Array(m).fill(0).map(()=>new Array(n).fill(0));

        for(let i=0; i<m; i++){
            for(let j=0; j<n; j++){
                if (i === m - 1) result = (result + dp[i][j]) % M;
                if (j === n - 1) result = (result + dp[i][j]) % M;
                if (i === 0) result = (result + dp[i][j]) % M;
                if (j === 0) result = (result + dp[i][j]) % M;
                temp[i][j] = (
                    ((i > 0 ? dp[i - 1][j] : 0) + (i < m - 1 ? dp[i + 1][j] : 0)) % M +
                    ((j > 0 ? dp[i][j - 1] : 0) + (j < n - 1 ? dp[i][j + 1] : 0)) % M
                ) % M;
            }
        }

        dp = temp;
    }
    
    return result;
};
