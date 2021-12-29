var maxProfit = function(prices) {
    let dp=Array(prices.length-1)//dp[i]:第i天买入可获得的最大收益，最后一天买收益为0，所以不考虑
    let maxSell=prices[prices.length-1]
    let maxProfit=0

    for(let i of dp.keys())
    {
        let day=prices.length-2-i
        maxSell=Math.max(maxSell,prices[day+1])
        dp[day]=maxSell-prices[day]
        maxProfit=Math.max(maxProfit,dp[day])
    }

    return (maxProfit>0)?maxProfit:0
};
console.log(maxProfit([7, 6, 4,3,1]));