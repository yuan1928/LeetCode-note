/*var translateNum = function(num) {
    let res=[]
    let dict={}
    for(let i=0; i<=25; i++)
    {dict[i]=String.fromCharCode(i+97)}

    const DFS=function (cur,rest){
        if(rest.length===0) {res.push(cur); return}

        DFS(cur+dict[rest[0]], rest.slice(1))
        if(Number(rest.slice(0,2))>=10 && Number(rest.slice(0,2))<=25)
        {DFS(cur+dict[rest.slice(0,2)],rest.slice(2))}
    }
    DFS("",String(num))
    return res
};*/
//每一位数字符可以单独翻译，也可以和其后一位数字符组合翻译成一位字母(10<=组合后的数字<=25)
//->DFS解决组合问题
var translateNumDFS = function(num) {
    let res=0

    const DFS=function (rest){
        if(rest.length===0) {res+=1; return}

        DFS(rest.slice(1))//剩余字符串rest的第一位数字符单独翻译
        if(Number(rest.slice(0,2))>=10 && Number(rest.slice(0,2))<=25)//剩余字符串rest的第一、二位数字符组合翻译
        {DFS(rest.slice(2))}
    }
    DFS(String(num))
    return res
};

//dp[i]:以num[i]作为最后一位数字符的翻译方法数
//如果num[i]单独翻译(一定)->有dp[i-1]种翻译方式
//如果num[i]、num[i-1]组合翻译(不一定)->有dp[i-2]种翻译方式
//->dp[i]=dp[i-1]+(可以组合)?dp[i-2]:0
var translateNumDP = function(num){
    num=String(num)
    let dp=[1]
    for(let i=1; i<num.length; i++)
    {
        if(Number(num.slice(i-1,i+1))>=10 && Number(num.slice(i-1,i+1))<=25)
        {dp[i]=dp[i-1]+((i-2>=0)?dp[i-2]:1)}
        else {dp[i]=dp[i-1]}
    }
    return dp[dp.length-1]
}
//滚动数组，但是实际上没有得到优化
var translateNum = function(num){
    num=String(num)
    let cur=1
    let last=1
    for(let i=1; i<num.length; i++)
    {
        if(Number(num.slice(i-1,i+1))>=10 && Number(num.slice(i-1,i+1))<=25)
        {
            let temp=cur
            cur+=last
            last=temp
        }
        else {last=cur}
    }
    return cur
}
console.log(translateNum(12258));