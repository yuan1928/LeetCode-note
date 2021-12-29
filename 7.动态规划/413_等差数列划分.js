//dp[i]表示以第i个元素作为当前数列结尾所产生的等差子数列个数
//nums[position]-nums[position-1]===nums[position-1]-nums[position-2] -> nums[i] nums[i-1] nums[i-2]构成一个等差数列
//此外，nums[i]还可以追加在nums[i-1]处产生的dp[i-1]个等差数列尾部、形成dp[i-1]个新的等差数列
//-> dp[i]=1+dp[i-1]
//nums[position]-nums[position-1]!==nums[position-1]-nums[position-2] -> dp[i]=0
//result=sum(dp[i]),dp[i]!==0

var numberOfArithmeticSlices = function(nums) {
    if(nums.length<3){return 0}

    let dp=[0,0]
    let position=2
    let result=0
    while (position<=nums.length-1)
    {
        if(nums[position]-nums[position-1]===nums[position-1]-nums[position-2])
        {
            dp[position]=1+dp[position-1]
            result+=dp[position]
        }
        else {dp[position]=0}
        position+=1
    }

    return result
};
console.log(numberOfArithmeticSlices([1, 2, 3, 4]));