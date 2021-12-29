var removeDuplicates = function(nums) {
    var left=1
    for(var right of nums.keys())
    {
        if(right-1>=0 && nums[right-1]!==nums[right])
        {
            nums[left]=nums[right]
            left+=1
        }
    }
    return left//数组去重后长度
};
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));