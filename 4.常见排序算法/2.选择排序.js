//相对于冒泡排序的两两比较找出最大值，选择排序找出最大值的方法是自定义的
let select=function (arr){
    let max=function (nums){
        let max=0
        for(let i of nums.keys())
        {max=(nums[i]>nums[max])?i:max}
        return max
    }

    let rear=arr.length-1
    while (rear>0)
    {
        let maxPos=max(arr.slice(0,rear+1))
        let temp=arr[maxPos]
        arr[maxPos]=arr[rear]
        arr[rear]=temp
        rear-=1
    }

    return arr
}
console.log(select([1, 9, 9, 8, 0, 2, 2, 1, 1, 7]));