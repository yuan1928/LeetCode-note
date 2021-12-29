var findMinDifference = function(timePoints) {
    const memo={}
    for(let i=0; i<timePoints.length; i++)//将每个时间点转成分钟为单位的number并记录每个时间点出现次数
    {
        timePoints[i]=Number(timePoints[i].slice(0,2))*60+Number(timePoints[i].slice(3))
        memo[timePoints[i]]=(memo[timePoints[i]]===undefined)?1:memo[timePoints[i]]+1
        if(memo[timePoints[i]]>1)return 0
    }

    if("0" in memo)timePoints.push(24*60)//00:00即24:00，故可以表示为0或者24*60

    timePoints.sort((a,b)=>(a-b))//排序后，每个时间点与其两个相邻元素隔的最近，特别地，首元素和尾元素也是相邻元素->min(每个元素各自最小时间差)=最小时间差
    if(timePoints.length===2)return timePoints[1]-timePoints[0]

    let res=Infinity
    for(let i=1; i<timePoints.length-1; i++)
    {res=Math.min(res,timePoints[i]-timePoints[i-1],timePoints[i+1]-timePoints[i])}
    if(timePoints[timePoints.length-1]!==24*60)
    {res=Math.min(res,24*60-timePoints[timePoints.length-1]+timePoints[0])}
    return res
};
console.log(findMinDifference(["23:59", "00:00"]));
console.log(findMinDifference(["00:00", "23:59", "00:00"]));
console.log(findMinDifference(["01:01", "02:01"]));
console.log(findMinDifference(["05:31", "22:08", "00:35"]));
console.log(findMinDifference(["22:27", "18:42", "09:57", "09:24", "09:26"]));