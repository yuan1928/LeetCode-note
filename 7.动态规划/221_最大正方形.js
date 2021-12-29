//dp[i][j]表示以(i,j)作为右下顶点、可产生的最大正方形的边长
//用matrix的第一行和第一列初始化dp的第一行和第一列，从第二行、第二列开始递推dp[i][j]:
//matrix[i][j]=0 -> dp[i][j]=0
//matrix[i][j]=1 -> dp[对角线元素]大于min(dp[左相邻元素]，dp[右相邻元素]) -> (i,j)可将相邻的最大正方形边长再增加1 -> dp[i][j]=1+min(dp[左]，dp[右])
//               -> 否则 -> dp[左]、dp[右]皆大于1 -> 举例可知此时dp[i][j]=min(dp[左],dp[右])
//                      -> dp[左]、dp[右]有一个大于1 -> 举例可知此时dp[i][j]=1+min(dp[左],dp[右])
//                      -> dp[左]、dp[右]皆小于等于于1 -> dp[i][j]=1
//最大正方形面积=max(dp)的平方

var maximalSquare = function(matrix) {
    let max=0
    let dp=Array(matrix.length)
    for(let i of dp.keys()) {dp[i]=Array(matrix[0].length)}
    for(let i of matrix[0].keys())
    {
        dp[0][i]=Number(matrix[0][i])
        if(dp[0][i]===1){max=1}
    }
    for(let i of matrix.keys())
    {
        dp[i][0]=Number(matrix[i][0])
        if(dp[i][0]===1){max=1}
    }

    for(let i of dp.keys())
    {
        if(i===0){continue}
        for(let j of dp[0].keys())
        {
            if(j===0){continue}
            if(matrix[i][j]==="1")
            {
                if(dp[i-1][j-1]>=Math.min(dp[i][j-1],dp[i-1][j]))
                {
                    dp[i][j]=1+Math.min(dp[i][j-1],dp[i-1][j])
                    max=dp[i][j]>max?dp[i][j]:max
                }
                else
                {
                    if(Math.min(dp[i][j-1],dp[i-1][j])>1)
                    {
                        dp[i][j]=Math.min(dp[i][j-1],dp[i-1][j])
                        max=dp[i][j]>max?dp[i][j]:max
                    }
                    else if(Math.max(dp[i][j-1],dp[i-1][j])>1)
                    {
                        dp[i][j]=1+Math.min(dp[i][j-1],dp[i-1][j])
                        max=dp[i][j]>max?dp[i][j]:max
                    }
                    else
                    {
                        dp[i][j]=1
                        max=dp[i][j]>max?dp[i][j]:max
                    }
                }
            }
            else {dp[i][j]=0}
        }
    }

    return max*max
};
let matrix=
    [["0"],["1"]]
console.log(maximalSquare(matrix));