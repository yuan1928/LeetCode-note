var nthUglyNumber = function(n) {
    if(n===1)return 1

    let dp=[1]
    let pointers=[0,0,0]
    for(let i=1; i<=n-1; i++)
    {
        let ugly=[2*dp[pointers[0]],3*dp[pointers[1]],5*dp[pointers[2]]]
        dp[i]=Math.min(...ugly)
        for(let j of ugly.keys())//如果ugly=[2*3,3*2,_]，则pointer[0]和pointer[1]都须更新
        {
            if(ugly[j]===dp[i])
            {pointers[j]+=1}
        }
    }

    return dp[n-1]
};
console.log(nthUglyNumber(10));