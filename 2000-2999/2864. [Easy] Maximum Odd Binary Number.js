//    https://leetcode.com/problems/maximum-odd-binary-number/description


var maximumOddBinaryNumber = function(s) {
    let chars = s.split('').sort().reverse();
    for (let i = chars.length - 1; i >= 0; i--) {
        if (chars[i] === '1') {
            [chars[i], chars[chars.length - 1]] = [chars[chars.length - 1], chars[i]];
            break;
        }
    }
    return chars.join('');
};

/* Approach 2

var maximumOddBinaryNumber = function(s) {
 let count =0;
 for(let x of s){
     if(x=='1') count++;
 }   
 return '1'.repeat(count-1)+'0'.repeat(s.length-count)+'1';
};

*/
