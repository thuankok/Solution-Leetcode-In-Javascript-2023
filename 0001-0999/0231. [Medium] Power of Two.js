//   https://leetcode.com/problems/power-of-two/description

var isPowerOfTwo = function(n) {
    if(n<0) return false;
    for(let i=0; i<32; i++){
        if(n < 2**i) return false
        if(2**i===n) return true;
    };
    return false;
    // Approach 2 return n > 0 && !(n & n - 1)
};
