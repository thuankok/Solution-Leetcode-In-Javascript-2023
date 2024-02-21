//   https://leetcode.com/problems/bitwise-and-of-numbers-range/description

var rangeBitwiseAnd = function(left, right) {
    let cnt=0;
    while(left !== right){
        left>>=1;  // 101 -> 010 -> 001
        right>>=1; // 111 -> 011 -> 001
        cnt++;
    }
    return  left <<= cnt;
};
