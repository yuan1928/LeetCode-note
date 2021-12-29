var canPartition = function(nums) {
    let sum=nums.reduce((a,b)=>(a+b))
    if(sum%2){return false}

    let dp=Array(nums.length)
    for(let i of dp.keys())
    {dp[i]=Array(sum/2+1).fill(false)}
    dp[0][0]=true//dp[i][j]:nums.slice(0,i)是否有和为j的子集->dp[i][0]:nums.slice(0,i)是否有和为0的子集，即空集->dp[i][0]=true

    for(let i of dp.keys())
    {
        for(let j of dp[0].keys())
        {
            if(i===0 && j!==0){dp[i][j]=(j===nums[0])}
            else if(i!==0)
            {
                if(j>=nums[i]){dp[i][j]=dp[i-1][j] || dp[i-1][j-nums[i]]}
                else {dp[i][j]=dp[i-1][j]}
            }
        }
    }

    return dp[dp.length-1][dp[0].length-1]
};

//压缩dp
/*var canPartition = function(nums) {
    let sum=nums.reduce((a,b)=>(a+b))
    if(sum%2){return false}

    let dp=Array(sum/2+1).fill(false)
    dp[0]=true

    for(let i of nums.keys())
    {
        let j=dp.length-1//倒序更新dp
        while (j>=0)
        {
            if(i===0 && j!==0){dp[j]=(j===nums[0])}
            else if(i!==0)
            {
                if(j>=nums[i]){dp[j]=dp[j] || dp[j-nums[i]]}
            }
            j-=1
        }
    }

    return dp[dp.length-1]
};*/
console.log(canPartition([1, 5, 5, 11,2]));