var nthSuperUglyNumber = function(n, primes) {
    const dp=[1]
    const pointer=Array(primes.length).fill(0)
    let min
    while (dp.length<n)
    {
        min=Math.min(...primes.map((v,k)=>(primes[k]*dp[pointer[k]])))
        dp.push(min)
        for(let i=0; i<=pointer.length-1; i++)
        {
            if(primes[i]*dp[pointer[i]]===min)
            {pointer[i]+=1}
        }
    }
    return dp[n-1]
};
console.log(nthSuperUglyNumber(15,[3,5,7,11,19,23,29,41,43,47]));