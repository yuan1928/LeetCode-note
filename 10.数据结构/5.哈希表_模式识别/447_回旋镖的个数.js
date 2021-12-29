var numberOfBoomerangs = function(points) {
    let dp=Array(points.length)//dp[i][j]: points[i]到points[j]的距离平方
    for(let i of dp.keys())
    {
        dp[i]=Array(points.length).fill(-1)
        dp[i][i]=0
    }

    let res=0
    for(let i of dp.keys())
    {
        let memo={}//记录到points[i]距离相同的若干点组，键是距离，值是点个数
        for(let j of dp[0].keys())
        {
            if(dp[i][j]===-1)//dis(points[i],points[j])=dis(points[j],points[i])
            {
                dp[i][j]=Math.pow(Math.abs(points[i][0]-points[j][0]),2)+Math.pow(Math.abs(points[i][1]-points[j][1]),2)
                dp[j][i]=dp[i][j]
            }

            if(memo[String(dp[i][j])]) {memo[String(dp[i][j])]+=1}
            else {memo[String(dp[i][j])]=1}

            if(j===dp[0].length-1)//所有到points[i]的距离都计算后，计算以points[i]为回旋镖起点的元组个数
            {
                for(let dis in memo)
                {
                    if(memo[dis]>=2)
                    {res+=memo[dis]*(memo[dis]-1)}
                }
            }
        }
    }

    return res
};
console.log(numberOfBoomerangs([[0,0],[1,0],[-1,0],[0,1],[0,-1]]));