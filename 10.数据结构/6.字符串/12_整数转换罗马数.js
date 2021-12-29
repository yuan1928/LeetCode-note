//计算num位数degree，产生相应的位数标志数组counter：0表示个位，...，3表示千位
//求商得到当前位的值current，取余得到下一次迭代的num
//将current用相应位的罗马数表示出来，注意如果是十位数，5最多出现一个，其余位如是
//将各位罗马数拼接起来

var intToRoman = function(num) {
    var degree=String(num).length
    var counter=Array(degree).fill(0).map((v,k)=>Number(k)).reverse()
    var result=""
    console.log(degree,counter)
    for(var i of counter)
    {
        var current=Math.floor(num/Math.pow(10,i))
        var rest=num%Math.pow(10,i)
        num=rest
        console.log(current,rest,num,i)
        if(i===3)//用M表示千位
        {
            result=result.padEnd(result.length+current,"M")
            continue
        }
        else if(i===2)//用C100/D500/CD400/CM900表示百位
        {
            if(current===9)
            {
                result=result.padEnd(result.length+2,"CM")
                continue
            }
            else if(current===4)
            {
                result=result.padEnd(result.length+2,"CD")
                continue
            }
            else
            {
                if(current>=5)
                {
                    result=result.padEnd(result.length+1,"D")
                    current=current-5
                }
                result=result.padEnd(result.length+current,'C')
                continue
            }
        }
        else if(i===1)//用X10/L50/XL40/XC90表示十位
        {
            if(current===9)
            {
                result=result.padEnd(result.length+2,"XC")
                continue
            }
            else if(current===4)
            {
                result=result.padEnd(result.length+2,"XL")
                continue
            }
            else
            {
                if(current>=5)
                {
                    result=result.padEnd(result.length+1,"L")
                    current=current-5
                }
                result=result.padEnd(result.length+current,"X")
                continue
            }
        }
        else//用I1/V5/IV4/IX9表示个位
        {
            if(current===9)
            {
                result=result.padEnd(result.length+2,"IX")
                //continue
            }
            else if(current===4)
            {
                result=result.padEnd(result.length+2,"IV")
                //continue
            }
            else
            {

                if(current>=5)
                {
                    result=result.padEnd(result.length+1,"V")
                    current=current-5
                }
                result=result.padEnd(result.length+current,"I")
                //continue
            }
        }
    }
    return result
};
console.log(intToRoman(58));