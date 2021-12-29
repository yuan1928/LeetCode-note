var minCost = function(maxTime, edges, passingFees) {
    let dp=Array(maxTime+1)//dp[i][j]:花费i分钟从0城市到j城市的最小开销
    for(let i of dp.keys())
    {dp[i]=Array(passingFees.length).fill(Infinity)}
    dp[0][0]=passingFees[0]

    for(let i of dp.keys())
    {
        if(i===0)continue
        for(let [city1,city2,time] of edges)
        {
            if(i-time>=0)
            {
                dp[i][city1]=Math.min(dp[i][city1],dp[i-time][city2]+passingFees[city1])
                dp[i][city2]=Math.min(dp[i][city2],dp[i-time][city1]+passingFees[city2])
            }
        }
    }

    let min=Infinity
    for(let i of dp.keys())
    {min=Math.min(min,dp[i][passingFees.length-1])}

    return (min===Infinity)?-1:min
};
console.log(minCost(maxTime = 29,
    edges = [[0, 1, 10], [1, 2, 10], [2, 5, 10], [0, 3, 1], [3, 4, 10], [4, 5, 15]],
    passingFees = [5, 1, 2, 20, 20, 3]));