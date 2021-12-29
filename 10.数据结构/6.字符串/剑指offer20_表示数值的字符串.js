var isNumber = function(s) {
    let left=0//去除首尾空格
    let right=s.length-1
    while (left<right)
    {
        if(s[left]===" "){left+=1}
        if(s[right]===" "){right-=1}
        if(s[left]!==' ' && s[right]!==" ")break
    }
    s=s.slice(left,right+1).split("")

    let idx=(s.indexOf("e")!==-1)?s.indexOf("e"):s.indexOf("E")//提取底数和指数
    let value//int or decimal
    let exponent//int
    if(idx!==-1)
    {
        value=s.slice(0,idx)
        exponent=s.slice(idx+1)
    }
    else {value=s}

    let number={0:true,1:true,2:true,3:true,4:true,5:true,6:true,7:true,8:true,9:true}
    let isNums=function (num){//判断是否为无符号整数，允许为空
        for(let i of num.keys())
        {if(!number[num[i]]){return false}}
        return true
    }
    let isInt=function (num){//判断是否为有符号整数，不可为空
        if(num[0]==="+" || num[0]==="-"){num=num.slice(1)}
        if(num.length===0)return false

        return isNums(num)
    }
    let isDecimal=function (num){//判断是否为有符号小数，不可为空
        if(num[0]==="+" || num[0]==="-"){num=num.slice(1)}
        if(num.length===0)return false
        if(num.length===1 && num[0]===".")return false

        return (num.indexOf(".")===0)?isNums(num.slice(1)):
            (isNums(num.slice(0,num.indexOf("."))) && isNums(num.slice(num.indexOf(".")+1)))
    }

    return ((value.indexOf(".")!==-1)?isDecimal(value):isInt(value)) && (exponent?isInt(exponent):true)
    //底数为有符号整数或有符号小数，指数为有符号整数
};
let F=["12e", "1a3.14", "1.2.3", "+-5", "12e+5.4","."]
for(let num of F)
{console.log(isNumber(num));}
let T=["+100", "5e2", "-123", "3.1416", "-1E-16", "0123"]
for(let num of T)
{console.log(isNumber(num));}