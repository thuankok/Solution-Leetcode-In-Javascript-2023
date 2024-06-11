//    https://leetcode.com/problems/relative-sort-array/description

var relativeSortArray = function(arr1, arr2) {
    let mp = new Map();
    let ans =[]
    for(let i =0 ; i<arr1?.length; i++ ){
        mp.set(arr1[i],(mp.get(arr1[i]) || 0)+1)
    }
    
    for(let num of arr2){
        if(mp.has(num)){
            for(let i = 0; i< mp.get(num); i++){
                ans.push(num);
            };
            mp.set(num,0)
        }
    };
    let ansTmp=[]
    for(let [key,value] of mp){
        if(value !==0){
           for(let i = 0; i<value; i++){
                ansTmp.push(key);
            };
         mp.set(key,0)
        }
    }
    ansTmp.sort((a,b)=> a-b)
    return ans.concat(ansTmp);
};
