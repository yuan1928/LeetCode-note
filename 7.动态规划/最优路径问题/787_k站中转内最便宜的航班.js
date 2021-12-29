var findCheapestPrice = function(n, flights, src, dst, k) {
    //dp[i][j]:从src城市坐i次飞机到达j城市的最小开销
    let dp=Array(k+2)//坐一次飞机=零次转机->容许k次转机=容许坐k+1次飞机；加上第0行作为初始条件，一共k+2行
    for(let i of dp.keys())
    {dp[i]=Array(n).fill(Infinity)}
    dp[0][src]=0//src坐0次飞机到src的开销为0

    for(let i of dp.keys())
    {
        if(i===0){continue}
        for(let [from,to,price] of flights)
        {dp[i][to]=Math.min(dp[i][to],dp[i-1][from]+price)}
    }

    let min=Infinity
    for(let i of dp.keys())
    {min=Math.min(min,dp[i][dst])}

    return (min===Infinity)?-1:min
};
console.log(findCheapestPrice(n = 3, edges = [[0, 1, 100], [1, 2, 100], [0, 2, 500]], src = 0, dst = 2, k = 0));