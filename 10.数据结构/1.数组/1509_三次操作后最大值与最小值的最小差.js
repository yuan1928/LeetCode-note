/*要求 [最大值 - 最小值] 的最小值,有 3 次修改数字的机会 -> 想要答案最小，每次操作要么修改最大值，要么修改最小值
其实修改成什么不重要，只要修改完之后不再是最大值或是最小值就好，所以跟删了是一个意思
修改三次的方案是以下几种可能
1. 删除 3 个最小值
2. 删除 2 个最小值，删除 1 个最大值
3. 删除 1 个最小值，删除 2 个最大值
4. 删除 3 个最大值
如果删除 3 个数之后，还剩 1 个数，那么答案也是 0 ，所以开始的时候，数组小于 4 都没必要计算，所以排个序解决*/

var minDifference = function(nums) {
    if(nums.length<=4)return 0

    nums.sort((a,b)=>(a-b))
    let case1=nums[nums.length-4]-nums[0]
    let case2=nums[nums.length-1]-nums[3]
    let case3=nums[nums.length-3]-nums[1]
    let case4=nums[nums.length-2]-nums[2]
    return Math.min(case1,case2,case3,case4)
};
console.log(minDifference([9,48,92,48,81,31]));