var nextPermutation = function(nums) {
    var compare=function (a,b){
        if(a===b)return 0
        else {return (a<b)?-1:1}
    }

    var right=nums.length-2//从倒数第二个数开始
    while (right>=0)//从低位到高位，找出第一个不按升序排列的数
    {
        if(nums[right]<nums[right+1])
        {
            var left=right//这个数是在高位的较小值
            right=nums.length-1//重置right，重新从右向左遍历
            while (right>=0)
            {
                if(nums[right]>nums[left])//找出第一个大于left的值，这个值是在低位的较大值中最小的那个
                {
                    var temp=nums[left]
                    nums[left]=nums[right]
                    nums[right]=temp//交换高位小值和低位大值，这样能保证新的数组比之前的大
                    var head=left+1//将left右边的数组部分reverse，注意题目要求原地操作，不能使用部分数组sort后拼接
                    var tail=nums.length-1
                    while (head<tail)
                    {
                        var temp=nums[head]
                        nums[head]=nums[tail]
                        nums[tail]=temp
                        head+=1
                        tail-=1
                    }
                    return nums
                }
                else {right-=1}
            }
        }
        else {right-=1}
    }
    return nums.sort(compare)
};
console.log(nextPermutation([4,2,0,2,3,2,0]));