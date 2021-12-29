var wordBreak = function(s, wordDict) {
    let dp=Array(s.length).fill(false)
    let trues=[0]

    let i=0
    while (i<=s.length-1)
    {
        for(let start of trues)
        {
            if(wordDict.indexOf(s.slice(start,i+1))!==-1)
            {
                dp[i]=true
                trues.push(i+1)
                break//不及时跳出会导致内存溢出
            }
        }
        i+=1
    }

    return dp[dp.length-1]
};
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat","og"]));