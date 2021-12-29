//找到s第一个非空字符的索引，并将其之前所有空格用slice截去
//判断截得字符串首字符是否为正负号，是则给flag赋相应值并将其截去，否则直接开始读取数字字符：
//对去除了空格和正负号的s的字符逐一判断，只有当其是数字时将其拼接到result，否则直接跳出
//拼接flag和result并转换成数字，进行大小区间判别后返回相应值

var myAtoi = function(s) {
    var flag="+"
    var result=""
    for(var i of s.split("").keys())
    {
        if(s[i]===" "){continue}
        else
        {
            var index=i
            break
        }
    }
    console.log("第一个非空格字符索引",index);
    s=s.slice(index)
    if(s[0] in {"+":"","-":""})//注意：in操作符用于判断某属性是否属于某对象，而非某元素是否属于某数组
    {
        flag=s[0]
        s=s.slice(1)
    }
    console.log("正负",flag);
    console.log("去除空格和正负号的s",s)
    for(var i of s.split("").keys())
    {
        if(s[i] in [0,1,2,3,4,5,6,7,8,9]){result+=s[i]}
        //注意：数组是一个对象，其属性即为Array().keys，属性值的类型为字符串
        else{break}
    }
    if(result.length===0){return 0}
    else
    {
        var thresh=(flag==="+")?Math.pow(2,31)-1:-Math.pow(2,31)
        result=Number(result.padStart(result.length+1,flag))
        result=(result>=-Math.pow(2,31)&&result<=Math.pow(2,31)-1)?result:thresh
    }
    return result
};
console.log(myAtoi("-42"));