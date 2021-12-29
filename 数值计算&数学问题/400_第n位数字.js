//1~9共9*1位数，10~99共90*2位数，100~999共900*3位数，....
var findNthDigit = function(n) {
    let cur=1//当前区间值的位数
    let step=9//当前区间总位数
    let sub=0//如果n在当前区间外，应该减去的位数
    while (step+sub<n)//x-(sub+1)+1=step，x为当前区间位数的索引上限
    {
        sub+=step
        cur+=1
        step=9*Math.pow(10,cur-1)*cur
    }
    //已确定n所在区间为[1(cur-1个0),(n个9)]
    //(1)(n-sub)%cur=0 -> n刚好是区间第(floor(n/cur))个数的末位
    //(2)(n-sub)%cur>0 -> n是区间第(floor(n/cur)+1)个数的第(n%cur-1)位
    n-=sub
    let threshDown=Number("1"+Array(cur-1).fill(0).join().replace(/,/g,""))
    const resNum=String((n%cur)?threshDown-1+Math.floor(n/cur)+1:threshDown-1+Math.floor(n/cur))
    return (n%cur)?Number(resNum[n%cur-1]):Number(resNum[resNum.length-1])
};
console.log(findNthDigit(3));
console.log(findNthDigit(10));
console.log(findNthDigit(11));
console.log(findNthDigit(100));
console.log(findNthDigit(1000));