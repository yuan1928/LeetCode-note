//dp[i][j]：(i,j)到达0的最小距离，如果mat[i][j]=0，则dp[i][j]=0，否则：
//dp[i][j]=min(dp[i-1][j],dp[i][j-1],dp[i][j+1],dp[i+1][j])+1
//在第一次更新dp时，无法同时得到上下左右的最新值
//故而分成两次来进行更新
//第一次更新：从左上到右下，得到dp[i][j]=min(dp[i-1][j],dp[i][j-1])+1
//第二次更新：从右下到左上，得到dp[i][j]=min(上一次更新后的值，min(dp[i][j+1],dp[i+1][j])+1)

var updateMatrix = function(mat) {
    let dp = Array(mat.length)
    for (let i of mat.keys()) {dp[i] = Array(mat[0].length)}
    for (let i of mat.keys())
    {
        for (let j of mat[0].keys())
        {
            if (mat[i][j] === 0) {dp[i][j] = 0}
            else {dp[i][j]=Infinity}
        }
    }

    for (let i of mat.keys())
    {
        for (let j of mat[0].keys())
        {
            if (mat[i][j] !== 0)
            {
                if(j!==0){dp[i][j]=Math.min(dp[i][j],1+dp[i][j-1])}
                if(i!==0){dp[i][j]=Math.min(dp[i][j],1+dp[i-1][j])}
            }
        }
    }

    let m=mat.length-1
    let n=mat[0].length-1
    for (let i of mat.keys())
    {
        for (let j of mat[0].keys())
        {
            if (mat[m-i][n-j] !== 0)
            {
                if(j!==0) {dp[m-i][n-j]=Math.min(dp[m-i][n-j],1+dp[m-i][n-j+1])}
                if(i!==0) {dp[m-i][n-j]=Math.min(dp[m-i][n-j],1+dp[m-i+1][n-j])}
            }
        }
    }

    return dp
}
let mat=[[0,0,0],[0,1,0],[0,0,0]]
console.log(updateMatrix(mat));