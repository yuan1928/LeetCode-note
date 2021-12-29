/*var maxProfit = function(prices) {
    let dp=Array(prices.length)
    for(let i of dp.keys())
    {dp[i]=Array(5)}
    dp[0]=[0,-prices[0],0,0,0]

    for(let i of dp.keys())
    {
        if(i!==0)
        {
            dp[i][0]=0
            dp[i][1]=Math.max(dp[i-1][1],dp[i-1][0]-prices[i])
            dp[i][2]=Math.max(dp[i-1][2],dp[i-1][1]+prices[i])
            dp[i][3]=Math.max(dp[i-1][3],dp[i-1][2]-prices[i])
            dp[i][4]=Math.max(dp[i-1][4],dp[i-1][3]+prices[i])
        }
    }

    return Math.max(...dp[dp.length-1])
};*/
var maxProfit = function(prices) {
    let dp=[-prices[0],0,-prices[0],0]//第一天只能买不能卖

    let temp=dp.slice()
    for(let i of prices.keys())
    {
        if(i!==0)
        {
            dp[0]=Math.max(temp[0],-prices[i])//第一次买
            dp[1]=Math.max(temp[1],temp[0]+prices[i])//第一次卖
            dp[2]=Math.max(temp[2],temp[1]-prices[i])//第二次买
            dp[3]=Math.max(temp[3],temp[2]+prices[i])//第二次卖
            temp=dp.slice()
        }
    }

    return Math.max(dp[1],dp[3])
}
console.log(maxProfit([1,2,3,4,5]));