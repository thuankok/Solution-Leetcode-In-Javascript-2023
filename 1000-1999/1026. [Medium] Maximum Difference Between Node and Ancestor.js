// https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/description

//  Start at Root (8):

// Initial Call: dfs(8, 8, 8)
// Path: [8]
// Action: Explore left and right children.
// Explore Left Subtree (Node 3):

// Call: dfs(3, 3, 8) (updating min to 3 and max stays 8)
// Path: [8, 3]
// Action: Explore left and right children of 3.
// Explore Node 1 (Left Child of 3):

// Call: dfs(1, 1, 8) (updating min to 1, max stays 8)
// Path: [8, 3, 1]
// Action: Leaf node, calculate difference 8 - 1 = 7.
// Explore Node 6 (Right Child of 3):

// Call: dfs(6, 3, 8) (min stays 3, max stays 8)
// Path: [8, 3, 6]
// Action: Explore left and right children of 6.
// Explore Node 4 (Left Child of 6):

// Call: dfs(4, 3, 8) (min stays 3, max stays 8)
// Path: [8, 3, 6, 4]
// Action: Leaf node, calculate difference 8 - 4 = 4.
// Explore Node 7 (Right Child of 6):

// Call: dfs(7, 3, 8) (min stays 3, max stays 8)
// Path: [8, 3, 6, 7]
// Action: Leaf node, calculate difference 8 - 3 = 5.
// Back to Root, Explore Right Subtree (Node 10):

// Call: dfs(10, 8, 10) (updating max to 10, min stays 8)
// Path: [8, 10]
// Action: Explore right child of 10.
// Explore Node 14 (Right Child of 10):

// Call: dfs(14, 8, 14) (updating max to 14, min stays 8)
// Path: [8, 10, 14]
// Action: Explore left child of 14.
// Explore Node 13 (Left Child of 14):

// Call: dfs(13, 8, 14) (min stays 8, max stays 14)
// Path: [8, 10, 14, 13]
// Action: Leaf node, calculate difference 14 - 8 = 6.
// Maximum difference is 7(ANSWER).


var maxAncestorDiff = function(root) {
    const traverse = (node, max, min) => {
         if(!node) return max - min; 
        
         max = Math.max(max, node.val);
         min = Math.min(min, node.val);
        
        return Math.max(traverse(node.left, max, min), traverse(node.right, max, min));
     }
  
    return traverse(root, root.val, root.val);
};
