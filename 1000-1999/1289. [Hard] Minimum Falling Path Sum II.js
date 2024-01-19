// https://leetcode.com/problems/minimum-falling-path-sum-ii/description

var minFallingPathSum = function(grid) {
    //Finds the indexes of the two smallest elements
    const mins = array => {
        let min1 = array[0] < array[1] ? 0 : 1;
        let min2 = 1-min1;

        for(let i = 2 ; i < array.length; i++){
            if(array[i] < array[min1]){
                min2 = min1;
                min1 = i;
            }
            else if(array[i] < array[min2]){
                min2 = i;
            }
        }
        
        return [min1,min2];
    }


    for(let i = 1 ; i < grid.length ; i++){
        const [m,n] = mins(grid[i-1]); 
        const min = grid[i-1][m];
        const smin = grid[i-1][n];

        for(let j = 0; j < grid[0].length ; j++){ 
            grid[i][j] = grid[i][j] + min; 
        }

        grid[i][m] = grid[i][m]-min+smin;
    }


    return Math.min(...grid[grid.length-1]);

};
