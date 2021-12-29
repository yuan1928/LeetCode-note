var convert = function(s, numRows) {
    if(s.length<=numRows||numRows===1) {return s}
    s=s.replace(/,/g,"-")//s中可能有逗号，此后有全局替换逗号的操作，故先用-替换，最后再换回来
    var seq=numRows-2
    //var seq=(s.length>=numRows+numRows-2)?numRows-2:s.length-numRows//对于("ABCDE",4),s无法得到一个完整的slice//line44规避了此情况
    var sliceLen=seq+numRows
    var counter=Array(Math.ceil(s.length/sliceLen)).keys()
    var temp=[]
    var spetial=[]
    var ordinary=[]
    var finalSpetial=[]
    var z=""
    //var zRows=Array(numRows).fill([])
    var zRows=Array(numRows)//使用fill初始化会导致之后给zRows任一行push值，都会同步push到其他行
    var result=""
    //初始化zRows
    for(var i of zRows.keys())
    {
        zRows[i]=[]
    }
    //将s中的slice保存到temp,每个slice是一个z的上横和中间折线，可以知道上横含字符numRows个，折线含字符seq=numRows-2个
    for(var i of counter)//of返回value迭代器，in返回index迭代器
    {
        if((i+1)*sliceLen<=s.length-1)
        {
            temp.push(s.slice(i*sliceLen,(i+1)*sliceLen))
            //console.log(i*sliceLen,(i+1)*sliceLen,s.slice(i*sliceLen,(i+1)*sliceLen))
        }
        else{temp.push(s.slice(i*sliceLen))}
    }
    console.log(temp);
    //将每个slice继续切分成上横和折线，分别保存到ordinary和spetial
    for(var item of temp)
    {
        if(item.slice(0,numRows).length!==0)
        {ordinary.push(item.slice(0,numRows))}
        if(item.slice(numRows).length!==0)
        {spetial.push(item.slice(numRows))}
    }
    console.log(ordinary,spetial)
    //将spetial中折线位置的字符按规则加上空格
    for(var item of spetial.values())
    {
        for(var i of Array(item.length).keys())//对于("ABCDE",4),("PAYPALISHIRING",5)这样的情况，不一定每个slice都是完整的(折线残缺)
                                               //所有i的上限不能能是seq-1
        {
            var res=item[i].padEnd(item[i].length+i+1," ")
            res=res.padStart(numRows," ")//第一个参数是输出字符串的总长，不是pad的位数，注意pad不是原地操作
            finalSpetial.push(res)
        }
    }
    console.log(finalSpetial);
    //将ordinary中的串和finalSpetial中加了空格的串按顺序拼接到z中，z即把z拉直了所得的包含空格的字符串
    for(var i of Array(Math.ceil(s.length/sliceLen)).keys())//如果使用之前的counter，counter在这里已回收
    {
        z+=ordinary[i]
        z+=finalSpetial.slice(i*seq,(i+1)*seq).join().replace(/,/g,"")
        //注意：replace第一个参数应为用g标记的正则表达式，直接传符号只能删除字符串中第一个逗号，当join后的字符串含有小于等于1个逗号时这里无错
        //但后面逗号多了会替换不干净
    }
    console.log(z);
    //z可以看成由四行数组组成，而z字符串中每个字符索引与rowsNum的余数与该字符所在数组索引存在对应关系
    //根据这一对应关系，将z串中字符逐个放到对应的行数组
    for(var i of Array(z.length).keys())
    {
        var row=i%numRows
        zRows[row].push(z[i])
    }
    //先将所有行数组内的字符join成字符串，再将字符串按顺序拼接后trim空格，即为所求
    for(var i of Array(numRows).keys())
    {
        //result+=zRows[i].join().replace(",","").trim()
        result+=zRows[i].join().replace(/,/g,"").replace(/ /g,"")
    }
    return result.replace(/-/g,",")

};
console.log(convert("abcde",4))
