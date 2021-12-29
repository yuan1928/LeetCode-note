var nthSuperUglyNumber = function(n, primes) {
    let dp=[1]//dp[i]=min(primes[j]*dp[index[j]]),0<=j<=primes.length-1; 下一个状态并非由前一个状态直接导出:dp[i]产生->index改变->dp[i+1]产生
    let index=Array(primes.length).fill(0)
    for(let i of Array(n-1).keys())
    {
        let isFind=false
        while (!isFind)
        {
            let min=Infinity//新丑数中最小的那个
            let minIndex=-1//对应索引
            for(let j of primes.keys())
            {
                let cur=primes[j]*dp[index[j]]//新丑数=某个prime*某个已产生的丑数(当前prime未乘过的、已产生丑数中最小的那个)
                if(cur<min)
                {
                    min=cur
                    minIndex=j
                }
                if(cur===dp[dp.length-1])break//当前丑数已经出现过->剪枝
            }
            index[minIndex]+=1
            if(dp[dp.length-1]<min)//等价于：dp.indexOf(min)=-1
            {
                dp.push(min)
                isFind=true
            }
        }
    }
    return dp[dp.length-1]
};
console.log(nthSuperUglyNumber(15,[3,5,7,11,19,23,29,41,43,47]));