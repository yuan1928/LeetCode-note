var maxResult = function(nums, k) {
    let dp=[nums[0]]
    let maxs=[[0,nums[0]]]

    let i=1
    while (i<=nums.length-1)
    {
        while (maxs[0][0]<i-k){maxs.shift()}

        dp[i]=maxs[0][1]+nums[i]

        while (maxs.length>0 && maxs[maxs.length-1][1]<=dp[i]){maxs.pop()}
        maxs.push([i,dp[i]])
        console.log(maxs);

        i+=1
    }
    return dp[nums.length-1]
};
console.log(maxResult([1,-5,-20,4,-1,3,-6,-3],2));