var minSubArrayLenPrefix = function(target, nums) {
    let thresh=(nums[0]>=target)?0:-1//第一个>=target的前缀和索引
    for(let i=1; i<nums.length; i++)//nums重置为前缀和数组
    {
        nums[i]+=nums[i-1]
        if(thresh===-1 && nums[i]>=target){thresh=i}
    }
    if(thresh===-1)return 0//剪枝

    let res=thresh+1
    for(let i=thresh; i<nums.length; i++)//sum(nums.slice(i,j+1))=prefix[j]-prefix[i]
    {
        for(let j=0; j<i; j++)
        {
            if(nums[i]-nums[j]<target)break
            else {res=Math.min(res, i-j)}
        }
    }
    return res
};
var minSubArrayLen=function (target,nums){
    let left=0
    let right=0
    let curSum=nums[0]//curSum=sum(nums.slice(left,right+1))
    let res=Infinity
    while (left<=right && right<nums.length)
    {
        while (curSum<target && right<nums.length-1)//固定left,找出使curSum>=target的最小right
        {
            right+=1
            curSum+=nums[right]
        }
        if(curSum<target)break//sum(nums.slice(left,nums.length))<target -> 右移left更找不到和>=target的窗口 -> 剪枝
        res=Math.min(res,right-left+1)//当前窗口和>=target -> 更新res
        if(res===1)return res//合法窗口最小长度已找到 -> 剪枝
        curSum-=nums[left]//右移left，开始寻找新窗口
        left+=1
    }
    return (res===Infinity)?0:res
}
console.log(minSubArrayLen(target = 7, nums = [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(4, [1, 4, 4]));
console.log(minSubArrayLen(target = 11, nums = [1, 1, 1, 1, 1, 1, 1, 1]));
console.log(minSubArrayLen(6, [10, 2, 3]));