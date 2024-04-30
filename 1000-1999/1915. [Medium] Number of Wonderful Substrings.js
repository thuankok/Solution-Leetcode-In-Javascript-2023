//    https://leetcode.com/problems/number-of-wonderful-substrings/description

var wonderfulSubstrings = function(word) {
    let count = 0;
    const n= word.length;
    const freq = new Array(1024).fill(0); // Array to store frequencies of characters
    freq[0] = 1;

    let bitmask =0; // Bitmask to represent frequency of characters
    
    // Iterate over all characters
    for (let i= 0; i< n; i++){
        const charIndex = word.charCodeAt(i) - 'a'.charCodeAt();
        bitmask ^= 1 << charIndex; // Toggle the bit for the current character
      
        // Increase count for wonderful substrings
        count += freq[bitmask];
        
        // Update frequencies array
        for (let j = 0; j < 10; j++) {
            const newBitmask = bitmask ^ (1 << j);
            count += freq[newBitmask];
        }
        
        freq[bitmask]++;
    }
    return count;
};

/*

Bitmask Technique😎:
Use a bitmask to represent the parity of each character's frequency.
Iterate through the string, updating the bitmask accordingly.
For each substring, check if the number of odd frequencies is at most one.
Detailed Steps:

Initialize Data Structures:

Initialize freq named count to store the count of each bitmask value encountered.
Initialize count to 0 to store the final count of wonderful substrings.
Initialize bitmask to 0 to represent the bitmask.
Iterate Through Characters:

Iterate through each character char in the input word.
Calculate the index of the character using charIndex = charCodeAt(char) - charCodeAt('a').
Update the bitmask by XOR-ing it with the bit representing the current character.
Increment result by the count of the current bitmask value stored in the count dictionary.
For each possible position of flipping a bit in the bitmask, increment result by the count of that bitmask value stored in the count dictionary.
Increment the count of the current bitmask value in the count dictionary.
Return Result:

Return the final count, which represents the number of wonderful substrings.
*/
