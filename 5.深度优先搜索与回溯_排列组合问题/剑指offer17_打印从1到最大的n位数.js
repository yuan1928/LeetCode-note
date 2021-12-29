//本题如果扩展到考虑大数
//则无法用普通number类型保存数值，而需要用字符串存储
var printNumbers = function(n) {
    let res=[]
    let DFS=function (cur){
        if(cur.length===n){res.push(cur);return}

        for(let num of ["0","1","2","3","4","5","6","7","8","9"])
        {DFS(cur+num)}
    }

    DFS("")
    for(let i of res.keys())
    {
        if(n-String(i).length)
        {res[i]=res[i].slice(n-String(i).length)}//去掉头部多余的0
        else {break}
    }
    res=res.slice(1).map((v)=>(Number(v)))//从1开始打印

    return res
};
console.log(printNumbers(3));