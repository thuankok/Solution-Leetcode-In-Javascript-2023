// https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/description

var maxLength = function(arr) {
    let dp=[0],res = 0;
    
    for(let s of arr){
        let a=0, dup=0;
        for(let c of s){
            dup |= a & (1 << (c?.charCodeAt() -"a".charCodeAt()));
            a |= 1 <<  (c?.charCodeAt() -"a".charCodeAt());
        }

        if(dup > 0) continue;
            
        for(let i=dp.length-1; i>=0 ; i--){
            if( (dp[i] & a)>0 )continue;
            dp.push(dp[i] | a);
            const count =(( ((dp[i] | a) >>>0).toString(2)).match(/1/g) ||[] ).length;
            res = Math.max( res, count);
        }
    }
    return res;
};
