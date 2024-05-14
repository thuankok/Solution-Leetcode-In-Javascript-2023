//  https://leetcode.com/problems/path-with-maximum-gold/description

var getMaximumGold = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let maxGold = 0;

    
    function dfs(row, col){
        if(row<0 || row>=m || col<0 || col>=n || grid[row][col] ===0  ){
            return 0
        }

        const goldTemp = grid[row][col];
        
        //  Mark the cell as visited by setting it to 0
        grid[row][col]= 0;

        const up = dfs(row-1,col);
        const down = dfs(row+1,col);
        const left = dfs(row, col-1);
        const right = dfs(row, col +1);

        // Restore the cell value
        grid[row][col] = goldTemp;

        return goldTemp+ Math.max(up,down,left,right)
    }
    
    for(let row=0; row< m; row++){
        for(let col=0; col<n; col++){
            if(grid[row][col]>0){
                maxGold= Math.max(maxGold,dfs(row, col))
            }
        }
    }
    return maxGold;
};

/* 
Recursive DFS Helper Function:

Define a helper function helper(row, col, visited) that performs a Depth-First Search (DFS) starting from the cell at (row, col). This function:

Checks for base cases where the search should stop (out of bounds, cell contains 0, or cell has already been visited).

Adds the current cell to the visited set to mark it as visited.

Recursively explores all four possible directions (down, up, right, left) from the current cell.

Removes the current cell from the visited set after exploring all directions.

Returns the maximum gold collected from the current cell and its reachable neighbors.
*/
