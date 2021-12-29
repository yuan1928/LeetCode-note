var checkValidString = function(s) {
    let dp=Array(s.length)
    for(let i of dp.keys())
    {dp[i]=Array(s.length).fill(false)}
    for(let i of dp.keys())
    {
        dp[i][i]=(s[i]==="*")
        if(i+1<=s.length-1 && ["(","*"].indexOf(s[i])!==-1 && [")","*"].indexOf(s[i+1])!==-1)
        {dp[i][i+1]=true}
    }

    let i=s.length-3
    while (i>=0)
    {
        let j=i+2
        while (j<=s.length-1)
        {
            dp[i][j]=(["(","*"].indexOf(s[i])!==-1 && [")","*"].indexOf(s[j])!==-1 && dp[i+1][j-1])
            for (let k = i; k < j && !dp[i][j]; k++)
            {dp[i][j] = dp[i][k] && dp[k + 1][j]}
            j+=1
        }
        i-=1
    }

    return dp[0][s.length-1]
}
let s1="(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())"
let s2="()"
let s3="(*)"
let s4="(*))"
let s5="((((()(()()()*()(((((*)()*(**(())))))(())()())(((())())())))))))(((((())*)))()))(()((*()*(*)))(*)()"
console.log(checkValidString(s5));