var removeElement = function(nums, val) {
    var left=0
    var len=0
    for(var right of nums.keys())
    {
        if(nums[right]!==val)
        {
            nums[left]=nums[right]
            left+=1
            len+=1
        }
    }
    return len
};
nums=[0,1,2,2,3,0,4,2]
console.log(removeElement(nums,2),nums);