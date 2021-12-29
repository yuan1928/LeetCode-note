/*var maxProfit = function(prices) {
    let dp=Array(prices.length)
    for(let i of dp.keys())
    {dp[i]=Array(prices.length).fill(-Infinity)}

    for(let i of dp.keys())
    {
        for(let j of dp[0].keys())
        {
            if(i<=j)
            {dp[i][j]=prices[j]-prices[i]}
        }
    }
    //console.log(dp);

    for(let i of dp.keys())
    {
        for(let j of dp[0].keys())
        {
            let row=dp.length-1-i
            let col=dp[0].length-1-j
            if(row<=col && col+2<=dp.length-1)
            {
                let afterFreeze=[]
                for(let choice of dp.slice(col+2))
                {afterFreeze.push(Math.max(...choice))}
                dp[row][col]=Math.max(dp[row][col],dp[row][col]+Math.max(...afterFreeze))
            }
        }
    }
    //console.log(dp);

    let profit=Math.max(...dp[0])
    let i=1
    while (i<=dp.length-1)
    {
        profit=Math.max(profit,...dp[i])
        i+=1
    }
    return profit
};最后两个用例超时*/

var maxProfit = function(prices){
    let dp=Array(prices.length)//dp[i]:第i天结束时某状态下的最大收益
    for(let i of dp.keys())
    {dp[i]=Array(3)}//第i天结束时三种可能的状态：0持股、1不持股非冷冻、2不持股冷冻期
    dp[0]=[-prices[0],0,0]

    for(let i of dp.keys())
    {
        if(i!==0)
        {
            dp[i][0]=Math.max(dp[i-1][1]-prices[i],dp[i-1][0])
            dp[i][1]=Math.max(dp[i-1][1],dp[i-1][2])
            dp[i][2]=dp[i-1][0]+prices[i]//每种状态只有买和不买两种选择，画状态转移图理解
        }
    }

    return Math.max(...dp[dp.length-1])
}
console.log(maxProfit([6, 1, 3, 2, 4, 7]));

var maxProfitII=function (prices){
    let dp=Array(prices.length)
    dp[0]=[-prices[0],0,0,0]//持股，卖出当天，卖出第二天，卖出第n>=3天
    for(let i=1; i<dp.length; i++)
    {
        dp[i]=Array(4)
        for(let j of dp[i].keys())
        {
            dp[i][0]=Math.max(dp[i-1][0],dp[i-1][3]-prices[i])
            dp[i][1]=dp[i-1][0]+prices[i]
            dp[i][2]=dp[i][1]
            dp[i][3]=Math.max(dp[i-1][3],dp[i-1][2])
        }
    }
    return Math.max(...dp[prices.length-1])
}
console.log(maxProfitII([6, 1, 3, 2, 4, 7]));
