//dp[i]是一个列表
//dp[i][0]:以s[i]作为结尾、s.slice(0,i+1)的解码方法数目
//dp[i][1]:以s.slice(i-1,i+1)作为结尾、s.slice(0,i+1)的解码方法数目 -> dp[0]=[s[0]="0"?0:1,0]
//dp[i][0]+dp[i][1]表示以s[i]结尾的所有解码方法数
//如果以当前字符作为结尾，且当前字符不为“0”，则当前字符可分别在以单字符或双字符结尾的旧字符串的基础上产生新字符串 -> dp[i][0]=dp[i-1][0]+dp[i-1][1]
//如果以前一个和当前字符作为结尾，若转换类型后10<=结尾<=26，则当前双字符能且只能在以单字符结尾的旧字符串基础上产生新字符串：
//当前字符的前一个字符即旧串的尾字符，若旧串以单字符结尾，则新串以双字符结尾；若旧串以双字符结尾，则新串将以三字符结尾 -> 不允许
//因此：dp[i][1]=dp[i-1][0]

var numDecodings = function(s) {
    /*let dp=Array(s.length)
    if(s[0]==="0"){return 0}
    else {dp[0]=[1,0]}

    let i=1
    while (i<=s.length-1)
    {
        dp[i]=[]

        if(s[i]!=="0"){dp[i][0]=dp[i-1][0]+dp[i-1][1]}
        else {dp[i][0]=0}

        if(Number(s.slice(i-1,i+1))>=10 && Number(s.slice(i-1,i+1))<=26)
        {dp[i][1]=dp[i-1][0]}
        else {dp[i][1]=0}

        i+=1
    }

    return dp[dp.length-1][0]+dp[dp.length-1][1]*/

    //DFS timeout
    //let res=0
    //     const DCF=function (curIdx){
    //         if(s[curIdx]!=="0")
    //         {
    //             if(curIdx===s.length-1)res+=1
    //             if(curIdx<s.length-1)DCF(curIdx+1)
    //         }
    //         if(Number(s.slice(curIdx, curIdx+2))>=10 && Number(s.slice(curIdx, curIdx+2))<=26)
    //         {
    //             if(curIdx+1===s.length-1)res+=1
    //             if(curIdx+1<s.length-1)DCF(curIdx+2)
    //         }
    //     }
    //     DCF(0)
    //     return res
    let single=1
    let both=0
    let newSingle
    let newBoth
    for(let i=1; i<=s.length-1; i++)
    {
        newSingle=(s[i]!=="0")?(single+both):0
        newBoth=(Number(s.slice(i-1, i+1))<=26 && Number(s.slice(i-1, i+1))>=10)?single:0
        single=newSingle
        both=newBoth
    }
    return single+both
}
console.log(numDecodings("1029324"));