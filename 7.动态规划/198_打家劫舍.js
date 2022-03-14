//dp数组的每一个位置i代表：以当前位置作为最后的抢劫地点所能抢到的最高金额
//dp[i]=nums[i]+max(dp[i-2],dp[i-3],...,dp[0])
//用maxs储存i之前已经抢劫过的最大和次大金额地点
//->每次更新dp[i]时，无需逐一比较dp[i-2],dp[i-3],...,dp[0]，直接看maxs[0]能不能抢(maxs[0]=i-1?),能的话就抢，不能的话就抢maxs[1]:
// 如果maxs[0]是i-1,那么maxs[2]一定不是i-1
//更新dp[i]后，更新maxs，注意如果dp[i]等于maxs[0]或maxs[1]，则不改变maxs[0]或maxs[1]
//只有当dp[i]大于时，才用dp[i]去更新maxs

/*var rob = function(nums) {
    if(nums.length===1){return nums[0]}

    let dp=[nums[0],nums[1]]
    let maxs=[]
    if(nums[0]<nums[1]){maxs=[1,0]}
    else {maxs=[0,1]}

    let house=2
    while (house<=nums.length-1)
    {
        if(maxs[0]!==house-1) {dp[house]=nums[house]+dp[maxs[0]]}
        else {dp[house]=nums[house]+dp[maxs[1]]}

        if(dp[house]>dp[maxs[0]]) {maxs=[house,maxs[0]]}
        else if(dp[house]<=dp[maxs[0]] && dp[house]>dp[maxs[1]]){maxs=[maxs[0],house]}

        house+=1
    }
    return Math.max(...dp)
};
console.log(rob([2,7,9,3,1]));*/

//另一种思路：
//定义一个数组 dp，dp[i] 表示抢劫到第 i 个房子时，可以抢劫的最大数量。我们考虑 dp[i]，
// 此时可以抢劫的最大数量有两种可能，一种是我们选择不抢劫这个房子，此时累计的金额即为dp[i-1]；
// 另一种是我们选择抢劫这个房子，那么此前累计的最大金额只能是 dp[i-2]，因为我们不能够抢劫第 i-1 个房子，否则会触发警报机关。
// 因此本题的状态转移方程为 dp[i] = max(dp[i-1],nums[i-1] + dp[i-2])。
var rob = function(nums) {
    let neighborFar=nums[0]
    let neighborClose=Math.max(nums[0],nums.length>1?nums[1]:0)
    let cur
    let max=Math.max(neighborClose, neighborFar)
    for(let i=2; i<=nums.length-1; i++)
    {
        cur=Math.max(nums[i]+neighborFar, neighborClose)
        max=Math.max(max, cur)
        neighborFar=neighborClose
        neighborClose=cur
    }
    return max
};
