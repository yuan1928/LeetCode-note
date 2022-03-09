//dp[i][j]:以grid[i][j]为最后一步做能取得的最大价值
//dp[i][j]=dp[i][j]+max(dp[i-1][j], dp[i][j-1])
//注意首行：dp[0][j>=1]=dp[0][j]+dp[i][j-1]
//注意首列：dp[i>=1][0]=dp[i][0]+dp[i-1][0]
var maxValue = function(grid) {
    let m=grid.length-1
    let n=grid[0].length-1

    for(let j=1; j<=n; j++) {grid[0][j]+=grid[0][j-1]}// first row
    for(let i=1; i<=m; i++) {grid[i][0]+=grid[i-1][0]}//first col
    for(let i=1; i<=m; i++)
    {
        for(let j=1; j<=n; j++)
        {grid[i][j]+=Math.max(grid[i-1][j], grid[i][j-1])}
    }

    return grid[m][n]
};
const mat1=[
            [1,3,1],
            [1,5,1],
            [4,2,1]
            ]
console.log(maxValue(mat1));