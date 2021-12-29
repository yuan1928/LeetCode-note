//word1和word2的最长公共子序列长度为l->最少操作次数=len(word1)-l+len(word2)-l
var minDistance = function(word1, word2) {
    let dp=Array(word1.length+1)
    for(let i of dp.keys())
    {
        dp[i]=Array(word2.length+1)
        dp[i][0]=0
    }
    dp[0].fill(0)

    for(let i=1;i<=dp.length;i++)
    {
        for(let j=1;j<=dp[0].length;j++)
        {
            if(word1[i-1]===word2[j-1]){dp[i][j]=dp[i-1][j-1]+1}//从i=1和j=1开始更新dp，但字符串需要从头比较，所以字符串从i-1和j-1开始遍历
            else {dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1])}
        }
    }

    let maxCommonLen=dp[word1.length][word2.length]
    return word1.length+word2.length-2*maxCommonLen
};
console.log(minDistance("eat", "sea"));
/*滚动数组优化
var minDistance = function(word1, word2){
    let dp=Array(word2.length+1).fill(0)

    for(let i=1;i<=word1.length;i++)
    {
        let lastRow=0
        for(let j=1;j<=word2.length;j++)
        {
            let temp=dp[j]//先记录下来，否则接下来dp[j]会更新
            if(word1[i-1]===word2[j-1]){dp[j]=lastRow+1}//dp[i][j]=dp[i-1][j-1]+1->上一次更新、前一列的值，已经被覆盖了->需要引用记录值
            else {dp[j]=Math.max(dp[j-1],dp[j])}//dp[i][j-1]->本来就是本次更新、前一列的值，直接用；dp[i-1][j]->正在但还未更新，直接用
            lastRow=temp//此次更新的值将成为上一次更新的值为下一轮更新所用，因为已经更新，所以不能直接使用dp[j]，而需要引用之前记录的temp
        }
    }

    return word1.length+word2.length-2*dp[word2.length]
}
 */
/*
dp[i][j]: 使word1.slice(0,i+1)和word2.slice(0,j+1)相同的最少操作次数
1.word1[i-1]===word2[j-1]->word1、2都不用删->dp[i][j]=dp[i-1][j-1]
2.word1[i-1]!==word2[j-1]->word1删去word1[i]或word2删去word2[j]->dp[i][j]=min(dp[i][j-1], dp[i-1][j])+1

var minDistance = function(word1, word2) {
    const m = word1.length, n = word2.length;
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
    for (let i = 1; i <= m; i++) {
        dp[i][0] = i;
    }//word1.slice(0,i+1)与word2.slice(0,0)相同->最少删去word1的前i个字符
    for (let j = 1; j <= n; j++) {
        dp[0][j] = j;
    }//word2.slice(0,j+1)与word1.slice(0,0)相同->最少删去word2的前j个字符
    for (let i = 1; i <= m; i++) {
        const c1 = word1[i - 1];
        for (let j = 1; j <= n; j++) {
            const c2 = word2[j - 1];
            if (c1 === c2) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
            }
        }
    }
    return dp[m][n];
};
 */