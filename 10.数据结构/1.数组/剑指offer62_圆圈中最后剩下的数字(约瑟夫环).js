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
//关于idx_(i-1)=[idx_i+m]%(上一轮元素个数i)的理解：
//设最后剩下的元素为last、索引为idx，则其在上一轮的索引>=idx -> 可设其在上一轮的索引=idx+x,x>=0
//在每一轮选择删除元素的过程中，环状遍历等价于链状遍历，如某一轮元素=[e1,e2,e3]的遍历过程等价于:e1->e2->e3->e1->e2->...
//由此，若假设last上一轮中的元素为[e1,e2,...,last]，则其上一轮的链状遍历过程e1->e2->...->last->e1->e2->...->last(前一个元素被删除、遍历结束)等价于：
//e1->e2->...->em->last(em是第m个元素被删除、遍历结束)，此时可知last索引为idx+m
//又由于实际上这一轮元素总个数为i而非(m+1)，故实际结果还要对i求余数
console.log(lastRemaining(5, 3));
console.log(lastRemaining(10, 17));