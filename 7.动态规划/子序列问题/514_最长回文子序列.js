//DP
var longestPalindromeSubseqDP = function(s){
    let dp=Array(s.length)
    for(let i of dp.keys())
    {dp[i]=Array(s.length).fill(1)}//dp[i][j]:s.slice(i,j+1)最长回文子串长度
    let res=0

    let start=s.length-2
    while (start>=0)
    {
        let end=start+1
        while (end<=s.length-1)
        {
            if(s[start]===s[end]) {dp[start][end]=((start+1<=end-1)?dp[start+1][end-1]:0)+2}
            else {dp[start][end]=Math.max(dp[start][end-1],dp[start+1][end])}
            res=Math.max(res,dp[start][end])
            end+=1
        }
        start-=1
    }

    return res
}
/*未完成，参考1143
var longestPalindromeSubseq = function(s) {
    let reverse=s.split("").reverse().join().replace(/,/g,"")

    //求revers和s的最长公共子序列长度即为所求
}*/
console.log(longestPalindromeSubseqDP("bbbdb"));