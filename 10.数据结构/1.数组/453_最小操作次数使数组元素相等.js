//模拟：
//数组排序->前n-1个元素分别加1->重复，直到前n-1个元素相同，此时再操作(尾元素-次尾元素)次即可
//为了加快收敛，可增大每次加的步长：
//将数组排序->前n-1个元素分别加上(尾元素+1-次尾元素)，相当于操作(尾元素+1-次尾元素)次->重复，直到前n-1个元素相同，此时再操作(尾元素-次尾元素)次即可
/*var minMoves = function(nums) {
    nums.sort((a,b)=>(a-b))
    let res=0
    let end=nums.length-1
    while (nums[0]!==nums[end])
    {
        if(nums[0]===nums[end-1]){res+=1;break}//数组排序后前n-1个元素相同
        res+=nums[end]+1-nums[end-1]
        for(let i=0; i<end; i++) {nums[i]+=(nums[end]+1-nums[end-1])}
        for(let i=end-1; i>=1; i--)//尾元素比次尾元素小1->重排序
        {
            if(nums[i]>=nums[end] && nums[i-1]<=nums[end])
            {nums.splice(i,0,nums.pop());break}
        }
    }
    return res
};*/
var minMovesSimulate = function(nums) {
    nums.sort((a,b)=>(a-b))
    let res=0
    let end=nums.length-1
    while (nums[0]!==nums[end])
    {
        if(nums[0]===nums[end-1]){res+=(nums[end]-nums[end-1]);break}
        res+=nums[end]+1-nums[end-1]
        nums[end]-=(nums[end]+1-nums[end-1])//前n-1个元素分别加步长=尾元素减步长
        for(let i=end-1; i>=1; i--)
        {
            if(nums[i]>=nums[end] && nums[i-1]<=nums[end])
            {nums.splice(i,0,nums.pop());break}
        }
    }
    return res
};
//前n-1个元素分别加1=尾元素减1 -> 将最大的元素减至最小，原来第二大元素成为新的最大元素，再将其减至最小 -> 各元素分别操作(nums[i]-min)次后，所有元素减至最小值
var minMoves = function(nums) {
    let min=Math.min(...nums)
    let res=0
    for(let num of nums){res+=(num-min)}
    return res
};
console.log(minMoves([1, 2, 3,5]));