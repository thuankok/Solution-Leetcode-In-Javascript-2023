// https://leetcode.com/problems/find-the-town-judge/description

var findJudge = function(n, trust) {
    const inDegree = new Array(n + 1).fill(0);
    const outDegree = new Array(n + 1).fill(0);
    for (let a of trust) {
        outDegree[a[0]]++;
        inDegree[a[1]]++;
    }
    for (let i = 1; i <= n; ++i) {
        if (inDegree[i] === n - 1 && outDegree[i] === 0)
            return i;
    }
    return -1;
};
