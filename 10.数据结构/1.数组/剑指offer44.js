var findNthDigit = function(n) {
    let count=1
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
    }
};
console.log(findNthDigit(13));