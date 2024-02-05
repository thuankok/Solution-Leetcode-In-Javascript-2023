// https://leetcode.com/problems/first-unique-character-in-a-string/description

var firstUniqChar = function(s) {
    for (let i=1; i<=s.length; i++) {
        let rest = s.substring(i);
        let curr = s.substring(0, i-1);
        if (rest.indexOf(s[i-1]) === -1 && curr.indexOf(s[i-1]) === -1) {
        	return i-1;
        }
    }
     return s.length === 1 ? 0 : -1;
};
