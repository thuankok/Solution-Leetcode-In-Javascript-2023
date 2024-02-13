// https://leetcode.com/problems/find-first-palindromic-string-in-the-array/description

function isPalindrome(s){
     let n = s.length
     for(let i=0; i< Math.trunc(n/2); i++ ){
            if(s[i] !== s[n-i-1]) return false;
     }
     return true;
 }
 
var firstPalindrome = function(words) {
    for(let s of words){
        if(isPalindrome(s)){
            return s;
        }
    }
    return "";
};
