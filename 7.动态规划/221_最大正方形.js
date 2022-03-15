//dp[i][j]表示以(i,j)作为右下顶点、可产生的最大正方形的边长
//可知只有当当前元素的对角线元素、左相邻元素、右相邻元素皆大于0时，当前元素可基于这三个元素扩展出更大的正方形
//dp[i][j]=( min(sqrt(dp[i-1][j-1]),sqrt(dp[i][j-1]),sqrt(dp[i-1][j])) +1 )^2
var maximalSquare = function(matrix) {
    let res=0
    let len
    for(let  i=0; i<=matrix.length-1; i++)
    {
        for(let j=0; j<=matrix[0].length-1; j++)
        {
            matrix[i][j]=Number(matrix[i][j])
            if(matrix[i][j] && !res)res=1
            if(i && j && matrix[i-1][j-1] && matrix[i][j] && matrix[i-1][j] && matrix[i][j-1])
            {
                len=Math.min(Math.sqrt(matrix[i-1][j-1]),  Math.sqrt(matrix[i][j-1]), Math.sqrt(matrix[i-1][j]))+1
                matrix[i][j]=len*len
                res=Math.max(res, matrix[i][j])
            }
        }
    }
    return res
};
let matrix=
    [["0"],["1"]]
console.log(maximalSquare(matrix));
matrix=
    [["1","1","1","1","0"],
        ["1","1","1","1","0"],
        ["1","1","1","1","1"],
        ["1","1","1","1","1"],
        ["0","0","1","1","1"]]
let m=
    [["0","0","0","1"],
        ["1","1","0","1"],
        ["1","1","1","1"],
        ["0","1","1","1"],
        ["0","1","1","1"]]
console.log(maximalSquare(matrix));
console.log(maximalSquare(m));