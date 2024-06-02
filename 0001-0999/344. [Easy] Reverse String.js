//    https://leetcode.com/problems/reverse-string/description


var reverseString = function(s) {
    //return s.reverse()
    const n= s.length;
    for(let i =0; i< n/2; i++){
        const tmp= s[i];
        s[i] = s[n-i-1];
        s[n-i-1] = tmp;
    }

    return s;
};

