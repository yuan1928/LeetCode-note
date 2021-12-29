var longestCommonSubsequence = function(text1, text2) {
    let dp=Array(text1.length+1)
    for(let i of dp.keys())
    {
        if(i===0){dp[i]=Array(text2.length+1).fill(0)}
        else {dp[i]=Array(text2.length+1)}
        dp[i][0]=0
    }

    for(let i of dp.keys())
    {
        if(i===0){continue}
        for(let j of dp[0].keys())
        {
            if(j===0){continue}

            if(text1[i-1]===text2[j-1])
            {dp[i][j]=1+dp[i-1][j-1]}
            else
            {dp[i][j]=Math.max(dp[i][j-1],dp[i-1][j])}
        }
    }

    return dp[text1.length][text2.length]
}

console.log(longestCommonSubsequence("pmjghexybyrgzczy","hafcdqbgncrcbihkd"));
//console.log(longestCommonSubsequence("abc","def"));