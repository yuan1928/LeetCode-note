//nums[i-1]<nums[i]<nums[i+1] 朝右走
//nums[i-1]<nums[i]>nums[i+1] 当前为峰值
//nums[i-1]>nums[i]>nums[i+1]不取等 朝左走
//nums[i-1]>nums[i]<nums[i+1] 朝右走

var findPeakElement = function(nums) {
    let left=0
    let right=nums.length-1
    while (left<=right)
    {
        let mid=Math.floor((left+right)/2)
        if(((mid-1===-1)?-Infinity:nums[mid-1])<nums[mid] && nums[mid]<((mid+1===nums.length)?-Infinity:nums[mid+1]))
        {left=mid+1}
        else if(((mid-1===-1)?-Infinity:nums[mid-1])<nums[mid] && nums[mid]>((mid+1===nums.length)?-Infinity:nums[mid+1]))
        {return mid}
        else if(((mid-1===-1)?-Infinity:nums[mid-1])>nums[mid] && nums[mid]>((mid+1===nums.length)?-Infinity:nums[mid+1]))
        {right=mid-1}
        else if(((mid-1===-1)?-Infinity:nums[mid-1])>nums[mid] && nums[mid]<((mid+1===nums.length)?-Infinity:nums[mid+1]))
        {left=mid+1}
    }
};
console.log(findPeakElement([1,2,1,3,5,6,4]));
