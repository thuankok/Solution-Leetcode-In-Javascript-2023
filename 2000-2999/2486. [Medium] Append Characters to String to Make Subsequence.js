//   https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/description


var appendCharacters = function(s, t) {
    let count =0;
    for(let i=0; i<s.length; i++){
        if(s[i] === t[count]){
            ++count;
        }
    }
    
    return t.length - count;
};
