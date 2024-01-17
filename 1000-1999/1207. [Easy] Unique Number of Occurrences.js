// https://leetcode.com/problems/unique-number-of-occurrences/description

var uniqueOccurrences = function(arr) {
    let ans = true;
    const dict ={};
    let arrTemp=[];
    for(let a of arr){
        dict[a] = dict[a]? dict[a] + 1:1
    };
    
    for(let [key, value] of Object.entries(dict)){
        if(arrTemp.includes(value)){
            return false;
        }else{
            arrTemp.push(value)
        }
        
    }

    return ans;
};
