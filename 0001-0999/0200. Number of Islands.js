// https://leetcode.com/problems/number-of-islands/description

var numIslands = function(grid) {
    const n= grid.length;
    const m= grid[0].length;
    function dfs(x,y){
        if(x<0 || x >=n || y<0 || y>=m ||grid[x][y] != '1')return
        grid[x][y]='0';  
        dfs(x-1,y)
        dfs(x+1,y)
        dfs(x,y-1)
        dfs(x,y+1) 

    }
    let ans =0;
    for(let i=0; i<n; i++){
        for(let j=0; j< m ; j++){
            if(grid[i][j]=='1'){
                ans++;
                dfs(i,j);
            }
        }
    };
    return ans;
    
};
