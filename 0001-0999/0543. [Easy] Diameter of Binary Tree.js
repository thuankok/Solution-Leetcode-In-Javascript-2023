//    https://leetcode.com/problems/diameter-of-binary-tree/description


var diameterOfBinaryTree = function(root) {
    
   let diameter = 0;

    function dfs(node) {
        let localHeight = 0;
        let localDia = 0;
        // base case
        if(node.left === null && node.right === null) {
            return localHeight;
        }

        if(node.left) {
           let leftHeight =  dfs(node.left);
           localHeight = leftHeight + 1;
           localDia = leftHeight + 1;

        }

        if(node.right) {
           let rightHeight =  dfs(node.right);
            localHeight = Math.max(localHeight, rightHeight + 1);
            localDia += rightHeight + 1;
        }

        if(localDia > diameter) {
            diameter = localDia;
        }

        return localHeight;
    }

    dfs(root);
    return diameter;

};
