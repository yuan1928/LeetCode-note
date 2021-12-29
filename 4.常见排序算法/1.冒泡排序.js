//每一次冒泡是通过两两比较将当前目标序列的最大值排到末尾
//每完成一次冒泡，就将末尾的最大值从目标序列中剔除，再对缩短的目标序列进行下一次冒泡排序
let bubble=function (arr){
    let rear=arr.length-1
    while (rear>0)
    {
        for(let i of arr.slice(0,rear+1).keys())
        {
            if(i+1<=rear && arr[i]>arr[i+1])
            {
                let temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
            }
        }
        rear-=1
    }
    return arr
}
let arr=[1,9,9,8,0,2,2,1,1,7]
console.log(bubble(arr));