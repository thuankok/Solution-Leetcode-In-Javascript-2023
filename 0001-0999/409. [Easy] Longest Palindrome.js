//   https://leetcode.com/problems/longest-palindrome/description

var longestPalindrome = function(s) {
    let st = new Set();
    let result =0;

    for (const c of s ){
        if(st.has(c)){
            st.delete(c)
            result+=2;
        }else{
            st.add(c)
        }
    }

    if(st.size>0){
        result+=1
    }
    return result;
};
