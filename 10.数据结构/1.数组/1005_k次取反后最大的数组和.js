//min+rest=sum->rest=sum-min->-min+rest=sum-2*min
//贪心原则：每次改变数组中最小值
var largestSumAfterKNegations = function(nums, k) {
    if(nums.length===1)return -nums[0]

    nums.sort((a,b)=>(a-b))
    let sum=nums.reduce((a,b)=>(a+b))
    while (k>0)
    {
        sum-=(2*nums[0])
        k-=1
        nums[0]=(-nums[0])
        if(nums[0]>=nums[nums.length-1]) {nums.push(nums.shift())}
        else if(nums[0]>nums[1] && nums[0]<nums[nums.length-1])
        {
            for(let i=1; i<nums.length; i++)
            {
                if(nums[0]>=nums[i] && nums[0]<=nums[i+1])
                {
                    nums.splice(i+1,0,nums.shift())
                    break
                }
            }
        }
    }
    return sum
};
console.log(largestSumAfterKNegations([4, 2, 3], 1));
console.log(largestSumAfterKNegations([3, -1, 0, 2], 3));
console.log(largestSumAfterKNegations(nums = [2, -3, -1, 5, -4], k = 2));