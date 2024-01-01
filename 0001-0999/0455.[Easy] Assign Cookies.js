// https://leetcode.com/problems/assign-cookies/description

var findContentChildren = function(g, s) {
    g.sort((a,b)=>a-b);
    s.sort((a,b)=>a-b);

    let i =0;
    for(let j= 0; i<g?.length && j<s?.length; j++){
        if(s[j] >= g[i]) i++;
    }

    return i;
};
