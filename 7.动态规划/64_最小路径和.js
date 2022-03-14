//dp与grid同型，dp[i][j]代表走到(i,j)时获得的最小和
//某个位置只能向右或者向下到达下个位置 -> (i,j)只能的前一个位置只能是(i,j-1)或(i,j-1)
//dp[i][j]=grid[i][j]+min(dp[i-1][j],dp[i][j-1]) (如果dp[i-1][j],dp[i][j-1]都存在)

var minPathSum = function(grid) {
    /*var dp=Array(grid.length)
    for(let i of grid.keys())
    {dp[i]=[]}
    dp[0][0]=grid[0][0]

    for(let i of grid.keys())
    {
        for(let j of grid[0].keys())
        {
            if(i-1>=0 && j-1>=0){dp[i][j]=grid[i][j]+Math.min(dp[i-1][j],dp[i][j-1])}
            else if(i-1>=0 && j-1<0){dp[i][j]=grid[i][j]+dp[i-1][j]}
            else if(i-1<0 && j-1>=0){dp[i][j]=grid[i][j]+dp[i][j-1]}
        }
    }

    return dp[grid.length-1][grid[0].length-1]*/
    const m=grid.length-1
    const n=grid[0].length-1
    for(let i=0; i<=m; i++)
    {
        for(let j=0; j<=n; j++)
        {
            if (i===0 && j-1>=0){grid[i][j]+=grid[i][j-1]}
            else if(j===0 && i-1>=0){grid[i][j]+=grid[i-1][j]}
            else if(i>0 && j>0){grid[i][j]+=Math.min(grid[i-1][j], grid[i][j-1])}
        }
    }
    return grid[m][n]
};
grid=[[1,3,1],[1,5,1],[4,2,1]]
console.log(minPathSum(grid));