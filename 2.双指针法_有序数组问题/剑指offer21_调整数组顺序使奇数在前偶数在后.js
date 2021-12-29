/*var exchange = function(nums) {
    let left=0
    let right=nums.length-1

    while (left<right)
    {
        if(nums[left]%2===1){left+=1}
        if(nums[right]%2===0){right-=1}//此处执行完未跳出，可能会继续错误地执行下一条if
        if(nums[left]%2===0 && nums[right]%2===1)
        {
            let temp=nums[left]
            nums[left]=nums[right]
            nums[right]=temp
            left+=1
            right-=1
        }
    }

    return nums
};*/
var exchange = function(nums) {
    let left=0
    let right=nums.length-1

    while (left<right)
    {
        if(nums[left]%2===0 && nums[right]%2===1)
        {
            let temp=nums[left]
            nums[left]=nums[right]
            nums[right]=temp
            left+=1
            right-=1
            continue
        }

        if(nums[left]%2===1){left+=1}
        if(nums[right]%2===0){right-=1}
    }

    return nums
};
console.log(exchange([1, 2, 3, 4,5,6,8,8,9,11]));
//也可使用双端队列
//遍历nums
//当前元素为偶则尾入队，为奇则头入队