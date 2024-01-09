// https://leetcode.com/problems/leaf-similar-trees/description

var leafSimilar = function(root1, root2) {
    const leaf = (root, result = []) => {
        if (root?.left) leaf(root.left, result)
        if (root?.right) leaf(root.right, result)
        if (!root?.left && !root?.right && root?.val) result.push(root?.val)
        return result
    }
    return leaf(root1).toString() === leaf(root2).toString()
};
