//先用二分法找到target出现的某个位置，再用中心扩散法找出其索引范围
var searchRange = function(nums, target) {
    var low=0
    var high=nums.length-1
    while (low<=high)
    {
        var mid=Math.floor((low+high)/2)
        if(nums[mid]===target){break}
        else if(nums[mid]>target){high=mid-1}
        else {low=mid+1}
    }
    if(nums[mid]!==target){return [-1,-1]}

    var left=mid
    var right=mid
    var isChange=true
    while (left>=0 && right<=nums.length-1 && left<=right)
    {
        if(nums[left-1]===target) {left-=1}
        else {isChange=false}
        if(nums[right+1]===target){right+=1}
        else {if(!isChange){break}}
    }
    return [left,right]
};
console.log(searchRange([5, 7, 7, 8, 8, 8,10], 7));