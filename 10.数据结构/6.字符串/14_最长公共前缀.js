var longestCommonPrefix = function(strs) {
    var lens=[]
    var result=""
    var flag=false
    for(var i of Array(strs.length).keys())
    {lens.push(strs[i].length)}
    for(var i of Array(Math.min(...lens)).keys())
    {
        var current=strs[0][i]
        for(var item of strs)//此处不要对strs.slice(1)，否则["a"]出错
        {
            console.log(current);
            if(item[i]===current){flag=true}
            else{flag=false;break}//注意要break，不然["c","acc","ccc"]这样的情况，flag置为false后可能被覆盖
        }
        if(flag){result+=current}
        else{break}
    }
    return result
};

console.log(longestCommonPrefix(["c","acc","ccc"]));