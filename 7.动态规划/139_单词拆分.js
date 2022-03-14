var wordBreakDP = function(s, wordDict) {
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
console.log(wordBreakDP("catsandog", ["cats", "dog", "sand", "and", "cat","og"]));

//DFS+记忆化搜索剪枝
var wordBreakDFS = function(s, wordDict){
    let res=false
    const memo={}//用以记录无法break的子串；memo[idx]=true->s.slice(cur)无法由dict中word拼接而成
    const DFS=function (cur){
        if(cur>s.length-1 || res)//剪枝1：一旦找到某种拼接方式break s则返回
        {
            res=true
            return
        }
        if(memo[cur])return;//剪枝2：若s.slice(i)在之前递归中已证实无法break则返回

        let isFind=false
        for(let word of wordDict)
        {
            if(s.slice(cur, cur+word.length)===word)
            {
                isFind=true
                if(!DFS(cur+word.length)){memo[cur]=true}//s.slice(i)的子串无法break->s.slice(i)无法break
            }
        }
        if(!isFind)//s.slice(i)无法break
        {
            memo[cur]=true
            return false
        }
    }
    DFS(0)
    return res
}