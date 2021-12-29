//数组的山峰存在且唯一 -> 数组最大值即山峰 ->二分查找最大值
var peakIndexInMountainArray = function(arr) {
    let left=0
    let right=arr.length-1
    while (left<=right)
    {
        let mid=Math.floor((left+right)/2)
        if(arr[mid-1]<arr[mid] && arr[mid]>arr[mid+1])return mid
        else if((arr[mid-1]<arr[mid] && arr[mid]<arr[mid+1]) || mid===0){left=mid+1}
        else if((arr[mid-1]>arr[mid] && arr[mid]>arr[mid+1]) || mid===arr.length-1){right=mid-1}
    }
};
console.log(peakIndexInMountainArray([1, 3, 5, 4, 2]));
console.log(peakIndexInMountainArray([0, 10, 5, 2]));
console.log(peakIndexInMountainArray([3, 4, 5, 1]));
console.log(peakIndexInMountainArray([24,69,100,99,79,78,67,36,26,19]));
console.log(peakIndexInMountainArray([18, 29, 38, 59, 98, 100, 99, 98, 90]));
console.log(peakIndexInMountainArray([3, 5, 3, 2, 0]));
