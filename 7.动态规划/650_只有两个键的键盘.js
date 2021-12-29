//dp[i][j]:已经打印出i个A、复制缓存区有j个A的状态
//如dp[2][0]之类的状态是无法达到的，故而此类状态用infinity初始化来避免讨论
//每一个状态可通过打印或复制到达下一个状态，因此dp[i][j]的上一个状态有两种可能：
//dp[i-j][j]->打印->dp[i][j] 或者 i=j:dp[i][*]->复制->dp[i][i]=dp[i][j]

var minSteps = function(n) {
    let dp=Array(n+1)
    for(let i of dp.keys())
    {dp[i]=Array(1+Math.floor(n/2)).fill(Infinity)}
    dp[1][0]=0

    for(let i of dp.keys())
    {
        if(i===0){continue}//由于打印数目i>0，因此dp[0]不作实际用途
        for(let j of dp[0].keys())
        {
            if(i-j>=0)
            {dp[i][j]=Math.min(dp[i][j],dp[i-j][j]+1)}
            if(i===j)
            {dp[i][j]=Math.min(dp[i][j],Math.min(...dp[i].slice(0,j))+1)}
        }
    }

    return Math.min(...dp[n])
};
console.log(minSteps(1));

//BFS
var minSteps1 = function(n){
    if(n===1)return 0

    /*let res=-1
    let BFS=function (memo,operate){
        let newMemo=[]
        for(let [copy,print] of memo)
        {
            //print
            if(print+copy===n)
            {
                res=operate+1
                return
            }
            else
            {newMemo.push([copy,print+copy])}

            newMemo.push([print,print])
        }
        BFS(newMemo,operate+1)
    }

    BFS([[0,1]],0)
    return res*/
    let memo=[[0,1]]
    let operate=0
    while (true)
    {
        let newMemo=[]
        for(let [copy,print] of memo)
        {
            if(copy+print===n)return operate+1

            if(print<=n && print!==copy)newMemo.push([print,print])
            if(print+copy<=n && copy!==0)newMemo.push([copy,print+copy])
        }
        memo=newMemo
        operate+=1
    }
}
console.log(minSteps1(1000));