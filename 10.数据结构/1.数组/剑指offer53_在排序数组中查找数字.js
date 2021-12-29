var search = function(nums, target) {
    if(target<nums[0] || target>nums[nums.length-1])return 0

    let left=0
    let right=nums.length-1
    let idx
    while (left<=right)
    {
        let mid=Math.floor((left+right)/2)
        if(nums[mid]===target){idx=mid;break}
        else if(nums[mid]<target){left=mid+1}
        else{right=mid-1}
    }
    if(idx===undefined)return 0

    left=idx
    right=idx
    while (nums[left-1]===target){left-=1}
    while (nums[right+1]===target){right+=1}
    return right-left+1
};
console.log(search( nums = [1], target = 1));