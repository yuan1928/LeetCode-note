var search = function(nums, target) {
    let rotate=0
    let divideSearch=function (left,right){
        while (left<=right)
        {
            let mid=Math.floor((left+right)/2)
            if(nums[mid]===target){return true}
            else if(nums[mid]>target){right=mid-1}
            else {left=mid+1}
        }
        return false
    }

    for(let i of nums.keys())
    {
        if(i+1<=nums.length-1 && nums[i]>nums[i+1])
        {rotate=i+1}
    }
    if(rotate===0)//数组所有元素相等或数组从nums[0]处旋转，此时需要对整个数组进行二分搜索
    {
        if(target>=nums[0]){return divideSearch(0,nums.length-1)}
        else {return false}
    }
    else
    {
        if(target>=nums[0]){return divideSearch(0,rotate-1)}
        else {return divideSearch(rotate,nums.length-1)}
    }
};
console.log(search([1,3,4,5], 2));