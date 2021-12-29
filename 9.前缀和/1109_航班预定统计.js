/*var corpFlightBookings = function(bookings, n) {
    let res=Array(n).fill(0)
    for(let [start,end,seats] of bookings)
    {
        while (start<=end)
        {
            res[start-1]+=seats
            start+=1
        }
    }
    return res
};*/
var corpFlightBookings = function(bookings, n){
    let diff=Array(n).fill(0)
    for(let [start,end,seats] of bookings)
    {
        diff[start-1]+=seats//表示start及其后的航班加上seats
        if(end<=diff.length-1)
        {diff[end]-=seats}//表示end以后的航班减去seats
    }
    for(let i of diff.keys())
    {
        if(i-1>=0)
        {diff[i]+=diff[i-1]}//如果某次start为20，那么其后的航班反向差分时都会加上start处记录的20，end处减去的seats也会同理扩散到end以后的航班
    }
    return diff
}
console.log(corpFlightBookings([[1,2,10],[2,2,15]], 2));