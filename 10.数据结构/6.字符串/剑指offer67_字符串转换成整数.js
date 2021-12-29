var strToInt = function(str) {
    //去掉开头的空字符串，判断非空首字符是否合法
    const valid=["0","1","2","3","4","5","6","7","8","9"]
    let start=0
    while (str[start]===" "){start+=1}
    str=str.slice(start)
    if(!str.length || (str[0]!=="+" && str[0]!=="-" && valid.indexOf(str[0])===-1)) return 0

    //截取数值部分
    let res=str[0]
    for(let i=1; i<str.length; i++)
    {
        if(valid.indexOf(str[i])===-1) {break}
        res+=str[i]
    }
    if(res==="+" || res==="-")return 0

    //res=Number(res) 不能使用内置函数
    //保留符号标志，截取符号位、0字符后的有效数值部分
    const isNegative=(res[0]==="-")
    start=0
    while((["+","-","0"].indexOf(res[start])!==-1) && start<res.length-1) {start+=1}//注意如果只有0作为有效数字，至少保留一位0
    res=res.slice(start)

    //string->number
    let resNum=0
    for(let i=0; i<res.length; i++)
        //{resNum+=(res[i]*Math.pow(10,res.length-1-i))} 字符*数字 进行了隐式类型转换
    {resNum+=((res[i].charCodeAt(0)-"0".charCodeAt(0))*Math.pow(10,res.length-1-i))}//num(str)=asc(str)-asc("0")
    if(isNegative){resNum=-resNum}

    //考虑越界
    const thresh=(resNum>0)?(Math.pow(2,31)-1):(-Math.pow(2,31))
    return ((resNum>=(-Math.pow(2,31))) && (resNum<=(Math.pow(2,31)-1)))?resNum:thresh
};
console.log(strToInt("-91283472332"));