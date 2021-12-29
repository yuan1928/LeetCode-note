/*30/36 timeout
var lastRemaining = function(n, m) {
    let nums=Array(n).fill(0).map((v,k)=>(k))
    let start=0//end-start+1=m -> end=start+m-1
    while (nums.length>1)
    {
        if(start+m-1<nums.length-1)
        {
            nums.splice(start+m-1,1)
            start=start+m-1
        }
        else if(start+m-1===nums.length-1)
        {
            nums.pop()
            start=0
        }
        else
        {
            let temp=((m-1)-(nums.length-start))%(nums.length)
            nums.splice(((m-1)-(nums.length-start))%(nums.length),1)
            start=temp
        }
    }
    return nums[0]
};*/
var lastRemaining=function (n,m){
    let idx=0//最后剩下的元素索引为0
    for(let i=2; i<=n; i++)
    {idx=(idx+m)%i}//最后剩下的元素在倒数第i轮的索引=(该元素在倒数第i-1轮索引+m)%(倒数第i轮的元素个数)
    return idx//初始数组元素值=元素索引 -> 直接返回剩下元素最初的索引即可
}
console.log(lastRemaining(5, 3));
console.log(lastRemaining(10, 17));