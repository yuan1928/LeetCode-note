var coinChange = function(coins, amount) {
    let dpNum=Array(amount+1)
    let dpSum=Array(amount+1)
    for(let i of dpNum.keys())
    {
        if(coins[0]<=i )
        {
            //dpNum[i]=Math.floor(i/coins[0])
            dpNum[i]=(i%coins[0]===0)?i/coins[0]:Infinity
            dpSum[i]=Math.floor(i/coins[0])*coins[0]
        }
        else
        {
            //dpNum[i]=0
            dpNum[i]=(i===0)?0:Infinity
            dpSum[i]=0
        }
    }


    for(let i of coins.keys())
    {
        if(i===0){continue}

        for(let j of dpNum.keys())
        {
            if(j>=coins[i])
            {
                dpNum[j]=Math.min(dpNum[j],1+dpNum[j-coins[i]])
                dpSum[j]=Math.max(dpSum[j],coins[i]+dpSum[j-coins[i]])
            }
        }
    }


    //return {dpNum,dpSum}
    //return dpNum[dpNum.length-1]
    if(dpSum[dpSum.length-1]===amount){return dpNum[dpNum.length-1]}
    else {return -1}
};
console.log(coinChange([186,419,83,408],6249));