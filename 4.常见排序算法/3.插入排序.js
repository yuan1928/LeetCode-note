//将一个数插入另一个有序数组，新数组仍然有序
let insert=function (nums,insertNum){
    if(nums[nums.length-1]<=insertNum)
    {return nums.push(insertNum)}

    nums.push(nums[nums.length-1])
    let current=nums.length-2//指向未push前的尾部
    while (current-1>=0 && nums[current-1]>insertNum)
    {
        nums[current]=nums[current-1]//nums[current-1]后移一位
        current-=1
    }
    nums[current]=insertNum
    return nums
}
console.log(insert([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 6));