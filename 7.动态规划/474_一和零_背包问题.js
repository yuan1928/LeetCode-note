var findMaxForm=function (strs, m, n){
    let colToMN=[]//m和n所有可能的组合：[0,0] [0,1]...[1,0],[1,1]...[m,n-1],[m,n]
    for(let i of Array(m+1).keys())
    {
        for(let j of Array(n+1).keys())
        {colToMN.push([i,j])}
    }
    let colToMNMap={}//dp[j]:j->[m,n]
    let mnTOColMap={}//[m,n]->j
    for(let i of Array((m+1)*(n+1)).keys())
    {
        colToMNMap[i]=colToMN[i]
        mnTOColMap[String(colToMN[i])]=i
    }

    let dp=Array((m+1)*(n+1))//dp[j]:strs.slice(0,i)在j对应的m、n限制下的最大子集大小，通过压缩将dp从二维降到一维
    let num0=Array(strs.length).fill(0)
    let num1=Array(strs.length).fill(0)//strs每个字符串元素0和1的个数
    for(let i of strs.keys())
    {
        for(let j of Array(strs[i].length).keys())
        {
            if(strs[i][j]==="0"){num0[i]+=1}
            else {num1[i]+=1}
        }
    }
    for(let i of dp.keys())//初始化dp二维意义的第一行
    {
        if(num0[0]<=colToMNMap[i][0] && num1[0]<=colToMNMap[i][1]){dp[i]=1}
        else {dp[i]=0}
    }

    for(let i of strs.keys())
    {
        if(i===0){continue}

        for(let j of dp.keys())
        {
            if(num0[i]<=colToMNMap[dp.length-1-j][0] && num1[i]<=colToMNMap[dp.length-1-j][1])
            {//如果strs[i]0和1的个数皆小于等于j对应的m和n
                dp[dp.length-1-j]=
                    Math.max(dp[dp.length-1-j],
                        1+dp[mnTOColMap[String([colToMNMap[dp.length-1-j][0]-num0[i],colToMNMap[dp.length-1-j][1]-num1[i]])]])
            }
        }
    }
    return dp[dp.length-1]
}
console.log(findMaxForm(["10", "0", "1"], 1, 1));

//优化：dp[i][j][k]->strs.slice(0,i)在“0”<=j、“1”<=k时的最大子集大小
//压缩：dp[i][j][k]->dp[j][k]