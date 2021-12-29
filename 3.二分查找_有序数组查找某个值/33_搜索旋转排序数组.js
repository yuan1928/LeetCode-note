//对于旋转点为k的旋转数组，可以通过比较target与nums[0]确定target在k以左还是以右
//将k以左或者以右覆盖的nums，在此nums中利用二分查找target
var search = function(nums, target) {
    var rotate=nums.length//这里针对nums=[1,2,3,4]这样的特殊情况初始化旋转点k的索引
    var gap=0//如果target在k以右，最后查找到的target索引应加上最初旋转点的索引才是target在原数组中的索引
    for(var i of nums.keys())
    {
        if((i-1)>=0 && nums[i]<nums[i-1]) {rotate=i;break}
    }
    if(target===nums[0]){return 0}
    else if(target>nums[0]) {nums=nums.slice(0,rotate)}
    else
    {
        nums=nums.slice(rotate)
        gap=rotate
    }
//二分查找
    var left=0
    var right=nums.length-1
    while (left<=right)
    {
        var mid=Math.floor((left+right)/2)
        if(target===nums[mid]){return (mid+gap)}
        else if(target<nums[mid]){right=mid-1}
        else{left=mid+1}
    }
    return -1
};
console.log(search([1], 1));