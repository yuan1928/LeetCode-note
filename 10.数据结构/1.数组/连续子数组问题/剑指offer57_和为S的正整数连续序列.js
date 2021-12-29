var findContinuousSequencePrefix = function(target) {
    let dp=Array(target-1).fill(0).map((v,k)=>(k+1))
    let nums=dp.slice()
    let left=0
    let right
    for(let i=1; i<dp.length; i++)
    {
        dp[i]+=dp[i-1]
        if(right===undefined && dp[i]>=target)
        {right=i}
    }

    let res=[]
    while (right<dp.length)
    {
        if(dp[right]===target)
        {
            res.push(nums.slice(0,right+1))
            right+=1
        }
        else if(dp[right]-dp[left]===target)
        {
            res.push(nums.slice(left+1,right+1))
            left+=1
            right+=1
        }
        else if(dp[right]-dp[left]<target) {right+=1}
        else if(dp[right]-dp[left]>target) {left+=1}
    }
    return res
};
var findContinuousSequenceWindow = function(target){
    if(target===1)return [[1]]
    if(target===2)return []

    const nums=Array(target-1).fill(0).map((v,k)=>(k+1))
    let left=0
    let right=1
    let sum=nums[left]+nums[right]
    let res=[]
    while (right<nums.length)
    {
        if(sum===target)
        {
            res.push(nums.slice(left,right+1))
            sum-=nums[left]
            left+=1
        }
        else if(sum<target)
        {
            right+=1
            sum+=nums[right]
        }
        else
        {
            sum-=nums[left]
            left+=1
        }
    }
    return res
}
//console.log(findContinuousSequence(9));