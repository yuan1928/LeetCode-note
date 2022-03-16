//dp[i]表示以第i个元素作为当前数列结尾所产生的等差子数列个数
//nums[position]-nums[position-1]===nums[position-1]-nums[position-2] -> nums[i] nums[i-1] nums[i-2]构成一个新等差数列
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

//长度为n的等差数组[x,x+d,x+2d,...,x+(n-1)d]包含的等差子数组总数： 1+2+3+...+(n-2)=(1+ n-2)*(n-2)/2=(n-1)*(n-2)/2
//通过滑窗找出nums中所有最长等差子数组，分别求最长等差子数组的等差子数组总数再求和即可
var numberOfArithmeticSlicesSlideWindow = function(nums) {
    if(nums.length<3)return 0

    let left=0
    let center=1
    let right=2//nums.slice(left,right+1)是等差子数组，注意center=right-1而非(left+right)/2
    let res=0
    let n
    while (right<=nums.length-1)
    {
        if(nums[right]-nums[center]===nums[center]-nums[center-1] && right<nums.length-1)
        {
            //nums[right]可以基于nums.slice(left,right)继续构成等差且right非数组尾 -> 窗口右沿右移
            center+=1
            right+=1
        }
        else if(nums[right]-nums[center]===nums[center]-nums[center-1] && right===nums.length-1)
        {
            //nums[right]可以基于nums.slice(left,right)继续构成等差但right已到达数组尾 -> res加上nums.slice(left,right+1)所含等差子数组个数
            n=right-left+1
            res+=(n-1)*(n-2)/2
            break
        }
        else
        {
            //nums[right]不能基于nums.slice(left,right)继续构成等差 -> 窗口左沿跳转至center
            n=center-left+1
            res+=(n-1)*(n-2)/2
            left=center//注意不是left=right
            center=left+1
            right=left+2
        }
    }
    return res
};