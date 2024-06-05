//  https://leetcode.com/problems/find-common-characters/description

var commonChars = function(words) {
    let arr=[];

    let firstIndex = words[0];

    firstIndex.split('').forEach((item, index) => {
        if (words.every(word => word.includes(item))) {
            arr.push(item);
            words = words.map(word => word.replace(item, ''));
        }
    });

    return arr;
};
