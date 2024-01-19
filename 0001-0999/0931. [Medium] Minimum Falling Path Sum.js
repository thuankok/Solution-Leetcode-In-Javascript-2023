// https://leetcode.com/problems/minimum-falling-path-sum/description

var minFallingPathSum = function(matrix) {
    let n = matrix.length;
    if(n === 1) return matrix[0][0];
    for(let i = 1; i < n; i++){
        for(let j = 0; j < n; j++){
            if(j === 0){
    matrix[i][j] += Math.min(matrix[i - 1][j], matrix[i - 1][j + 1]);
            } else if(j === n - 1){
    matrix[i][j] += Math.min(matrix[i - 1][j], matrix[i - 1][j - 1]);
            } else {
    matrix[i][j] += Math.min(matrix[i - 1][j], matrix[i - 1][j - 1], matrix[i - 1][j + 1]);
            }
        }
    }
    return Math.min(...matrix[n - 1]);
};
