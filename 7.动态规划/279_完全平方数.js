//dp[i]:和为i所需的最小平方数加数个数
//i=(i-j*j)+j*j -> dp[i] = dp[i-j*j]+dp[j*j] = dp[i-j*j]+1
//dp[0]=0

var numSquares = function(n) {
    let dp=Array(n+1).fill(0).map((v,k)=>(k))
    for(let i of dp.keys())
    {
        let j=1
        while (i>=j*j)
        {
            dp[i]=Math.min(dp[i],dp[i-j*j]+1)
            j+=1
        }
    }
    return dp[n]
};
console.log(numSquares(13));