 https://leetcode.com/problems/longest-ideal-subsequence/description

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestIdealString = function(s, k) {
    const dp= new Array(128).fill(0);
    for(let c of s){
        const index= c?.charCodeAt();
        dp[index] = Math.max(...dp.slice(index-k,index+k+1))+1;
    }
    return Math.max(...dp)
};

/* Approach
Initialize an Array: Use an array l of size 128 to cover all ASCII values of interest. 
This array holds the longest subsequence length where each index directly corresponds to the ASCII value of a character.

Iterate Over the String: For each character in the input string, 
compute its ASCII value to use as an index in the array.

Update the Array: For the current character, 
determine the potential longest subsequences that could end with it by looking at the subsequences that could precede it.
This is done by checking characters within the allowed distance k in the alphabet (both before and after the character).

Compute the Maximum: Update the array at the index of the current character’s ASCII 
value to be one more than the maximum subsequence length found in the relevant range of the array.

Final Computation: After processing all characters, the length of the longest ideal subsequence is the maximum value in the array l.

TLDR
Each index in the DP array is independently tracking the longest subsequence that ends specifically with the character associated with that index. 
The final answer to the problem is the longest of all these possible ideal subsequences, 
which is why you look for the maximum value across the entire DP array. 
This maximum value gives you the longest sequence you were able to construct while abiding by the rules set out by k for any of the possible ending characters.

Complexity
  Time complexity:
    O(n×(2k+1))

Space complexity:
O(1) */
