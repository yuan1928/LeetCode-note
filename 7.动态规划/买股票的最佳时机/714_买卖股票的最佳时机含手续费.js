var maxProfit = function(prices,fee) {
    let dp=[-prices[0],0]//dp[1]=0：因为卖建立在买的基础上，第一天只能买，故而卖(不持股)的最大收益为0

    let temp=dp[0]
    for(let i of prices.keys())
    {
        if(i!==0)
        {
            dp[0]=Math.max(dp[0],dp[1]-prices[i])//持股
            dp[1]=Math.max(dp[1],temp+prices[i]-fee)//不持股
            temp=dp[0]
        }
    }

    return Math.max(...dp)
};
console.log(maxProfit([9,8,7,1,2], 3));