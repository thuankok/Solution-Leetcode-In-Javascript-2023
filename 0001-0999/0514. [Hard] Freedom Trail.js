//  https://leetcode.com/problems/freedom-trail/description

var findRotateSteps = function(ring, key) {
    const positions = new Map();
    for (let i = 0; i < ring.length; i++) {
        if (!positions.has(ring[i])) {
            positions.set(ring[i], []);
        }
        positions.get(ring[i]).push(i);
    }
    const memo = new Array(key.length).fill(null).map(() => new Array(ring.length).fill(-1));
    return helper(0, 0, positions, key, ring, memo);
};

function helper(in_index, pos, positions, key, ring, memo) {
    if (in_index === key.length) {
        return 0;
    }
    if (memo[in_index][pos] !== -1) {
        return memo[in_index][pos];
    }
    let min_steps = Infinity;
    for (const i of positions.get(key[in_index])) {
        let steps;
        if (i >= pos) {
            steps = Math.min(i - pos, pos + ring.length - i);
        } else {
            steps = Math.min(pos - i, i + ring.length - pos);
        }
        const next_steps = helper(in_index + 1, i, positions, key, ring, memo);
        min_steps = Math.min(min_steps, steps + next_steps);
    }
    memo[in_index][pos] = min_steps + 1;
    return min_steps + 1;
}


/*
🛠️ Approach
1. We first convert the ring string into a character array for easier manipulation.
2. We create a list array p to store the positions of each character in the ring. Each index of p corresponds to a character in the alphabet, and the list at that index contains the positions of occurrences of that character in the ring.
3. We use memoization to optimize the recursion.
4. We define a recursive function helper to calculate the minimum number of steps needed to spell the keyword. 
   The function takes the current index in the keyword in, the current position of the ring pos, the list array p, the keyword array k, the ring string r, and the memoization array memo.
5. If we have spelled all the characters in the keyword (in == k.length), we return 0.
6. If the result for the current state is already memoized, we return it.
7. Otherwise, we iterate through the positions of the current character in the ring and calculate the minimum steps needed to align the current character at the "12:00" direction.
8. We recursively call the helper function for the next character in the keyword and update the minimum steps accordingly.
9. We memoize the result for the current state and return it.
⏰ Complexity Analysis
Time complexity: The time complexity of the recursive function with memoization is O(n * m), where n is the length of the keyword and m is the length of the ring. Each state of the recursion tree is calculated only once due to memoization.
Space complexity: The space complexity is O(n * m) due to the memoization array.
*/
