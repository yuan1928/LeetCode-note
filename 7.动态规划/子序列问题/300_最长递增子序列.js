//dp[i]：以nums[i]结尾的上升子序列的最大长度
//dp[0]=1
//dp[i]=max(dp[j])+1,其中0≤j<i且num[j]<num[i]
//如果nums[0]到nums[i-1]皆大于nums[i]，则dp[i]=1

var lengthOfLIS = function(nums) {
    let dp=Array(nums.length)
    dp[0]=1

    let i=1
    while (i<=dp.length-1)
    {
        let lastLen=0
        for(let j of nums.slice(0,i).keys())
        {
            if(nums[i]>nums[j])
            {lastLen=(dp[j]>lastLen)?dp[j]:lastLen}
        }
        dp[i]=1+lastLen
        i+=1
    }

    return Math.max(...dp)
};
console.log(lengthOfLIS([7,7,7,7,7,7,7]));