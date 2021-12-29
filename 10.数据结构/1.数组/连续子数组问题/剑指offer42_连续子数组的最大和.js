var maxSubArray1 = function(nums) {
    let dp=[nums[0]]
    for(let i=1; i<nums.length; i++)
    {dp[i]=Math.max(nums[i], nums[i]+dp[i-1])}
    return Math.max(...dp)
};
//滚动数组优化
var maxSubArray2 = function(nums) {
    let dp=nums[0]
    let res=dp
    for(let i=1; i<nums.length; i++)
    {
        dp=Math.max(nums[i], nums[i]+dp)
        res=Math.max(res, dp)
    }
    return res
};
//前缀和
var maxSubArray = function(nums) {
    let pre=[nums[0]]
    for(let i=1; i<nums.length; i++)
    {pre[i]=nums[i]+pre[i-1]}

    let res=nums[0]
    let minPre=0
    for(let i of pre.keys())
    {
        res=Math.max(res,pre[i]-minPre)
        minPre=Math.min(minPre, pre[i])
    }
    return res
};
//分治+线段树
//对于一个区间[l,r]，以L开头的最大子序列和为L，以r结尾的最大子序列和为R，首尾在区间之中的最大子序列和为S
//->该区间最大子序列和为max(L,R,S)
//区间[l,r]可分为[l,mid]+[mid+1,r]，两个子区间的三个最大子序列和
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));