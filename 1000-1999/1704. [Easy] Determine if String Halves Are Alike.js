// https://leetcode.com/problems/determine-if-string-halves-are-alike/description

var halvesAreAlike = function(s) {
    let letterz = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    let a1 = 0;
    let a2 = 0;
    
    for(let i = 0; i < s.length /2; i++) {
        if(letterz.has(s[i])) a1++;
        if(letterz.has(s[i + s.length /2])) a2++;
        
    }
    
    return a1 === a2

};
