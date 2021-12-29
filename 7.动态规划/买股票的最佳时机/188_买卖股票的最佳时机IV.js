var maxProfit = function(k, prices) {
    if(k===0){return 0}

    let dp=Array(2*k)
    for(let i of dp.keys())
    {
        if(i===0 || i%2===0)//第(i+2)/2次买
        {dp[i]=-prices[0]}
        else
        {dp[i]=0}//第(i+1)/2次卖
    }

    for(let i of prices.keys())
    {
        if(i===0){continue}

        for(let j of dp.keys())
        {
            //注意:dp[第i次买]=max{dp[第i-1次买],dp[第i-1次卖]-prices[i]}=max{dp[第i次买],dp[第i次卖]-prices[i]}
            if(j===0){dp[j]=Math.max(dp[j],-prices[i])}//买:j=0
            else if(j%2===0){dp[j]=Math.max(dp[j],dp[j-1]-prices[i])}//买:j%2=0
            else {dp[j]=Math.max(dp[j],dp[j-1]+prices[i])}//卖:j%2!==0
        }
    }

    return dp[dp.length-1]
};
console.log(maxProfit(2,[2,4,1]));