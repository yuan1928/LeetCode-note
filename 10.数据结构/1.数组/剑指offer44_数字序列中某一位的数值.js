var findNthDigit = function(n) {
    /*let count=1
    let cur="0"
    while (n>=0)
    {
        if(n-cur.length>0)
        {
            n-=cur.length
            cur=String(count)
            count+=1
        }
        else if(n===cur.length)return Number(String(count)[0])
        else {return Number(cur[n])}
    }*/

    //判断n处在几位数涵盖的区间，如n=5，则处于一位数0~9的区间
    let digitCount=1//区间内值的位数，从一位数区间开始判断
    let downThresh=0//区间开始的位数，一位数从整个序列第0位开始
    let upThresh=9//一位数在序列第9位结束
    while (n>upThresh)
    {
        digitCount+=1
        downThresh=upThresh+1
        //diff为x位数的个数：(100...)~(999...)
        let diff=Number(Array(digitCount).fill(9).join().replace(/,/g,""))-Number([1].concat(Array(digitCount-1).fill(0)).join().replace(/,/g,""))+1
        //up-down+1=diff*digitCount
        upThresh=diff*digitCount+downThresh-1
    }

    const q=Math.floor((n-(downThresh-1))/digitCount)
    const r=(n-(downThresh-1))%digitCount
    let startNum//x位数涵盖区间的起点数值
    if(digitCount===1){startNum=0}
    else {startNum=Number([1].concat(Array(digitCount-1).fill(0)).join().replace(/,/g,""))}
    //通过归纳法由q、r、startNum和digitCount得到结果
    if(r===0)
    {
        let num=String(startNum+q-1)
        return num[num.length-1]
    }
    else
    {
        let num=String(startNum+q)
        return num[r-1]
    }
};
console.log(findNthDigit(5));