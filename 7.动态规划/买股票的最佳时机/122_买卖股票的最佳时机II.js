var maxProfit = function(prices) {
    let dp=Array(prices.length)
    for(let i of dp.keys())
    {dp[i]=Array(2)}//0-持股 1-不持股
    dp[0]=[-prices[0],0]

    for(let i of dp.keys())
    {
        if(i!==0)
        {
            dp[i][0]=Math.max(dp[i-1][0],dp[i-1][1]-prices[i])
            dp[i][1]=Math.max(dp[i-1][1],dp[i-1][0]+prices[i])
        }
    }

    return Math.max(...dp[dp.length-1])
};

//优化：滚动数组
/*var maxProfit = function(prices) {
    let dp=[-prices[0],0]

    let temp=dp[0]
    for(let i of prices.keys())
    {
        if(i!==0)
        {
            dp[0]=Math.max(dp[0],dp[1]-prices[i])
            dp[1]=Math.max(dp[1],temp+prices[i])
            temp=dp[0]
        }
    }

    return Math.max(...dp)
};*/
//console.log(maxProfit([1,2,3,4,5]));
