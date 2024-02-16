//  https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/description

var findLeastNumOfUniqueInts = function(arr, k) {
    // Create a map to store the frequency of each number
    const frequencyMap = new Map();

    // Populate the frequecy map
    for(const num of arr){
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // Convert map entries to an array [number,frequency] pairs and sort by frequency
    const sortedFrequency = Array.from(frequencyMap.entries()).sort((a,b)=> a[1]-b[1]);

    // Initialize unique count
    let uniqueCount = sortedFrequency.length;

    for (const [_, frequency] of sortedFrequency) {
        if (k >= frequency) {
            // If k is greater than or equal to the frequency of the current number,
            // decrement k by the frequency and decrement the unique count
            k -= frequency;
            uniqueCount--;
        } else {
            // If k is less than the frequency of the current number, break the loop
            break;
        }
    }
    
    return uniqueCount;
    
};
