// https://leetcode.com/problems/group-anagrams/description

var groupAnagrams = function(strs) {
    const word  = new Map();
    for (const str of strs ){
        const sortedWord = str.split('').sort().join('');
        if(word.has(sortedWord)){
        word.get(sortedWord).push(str);
        }else{
            word.set(sortedWord,[str]);
        }
    }
    const resultArray = Array.from(word.values());
   return resultArray

};
