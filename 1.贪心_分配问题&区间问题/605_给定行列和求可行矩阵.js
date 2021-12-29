var restoreMatrix = function(rowSum, colSum) {
    let res=Array(rowSum.length)
    for(let i of res.keys())
    {res[i]=Array(colSum.length)}

    for(let i of res.keys())
    {
        for(let j of res[0].keys())
        {
            res[i][j]=Math.min(rowSum[i],colSum[j])
            //res[i][j]<=min(rowSum[i],colSum[j])->即使res[i][j]取可行范围里的最大值，i行、j列剩下的元素取0也满足题意
            rowSum[i]-=res[i][j]
            colSum[j]-=res[i][j]
        }
    }

    return res
}
console.log(restoreMatrix([14,9], [6,9,8]));