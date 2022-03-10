var isStraight = function(nums) {
    const quikSort=function (start, end, arr){
        if(start>=end)return

        let left=start
        let right=end
        while (left<right)
        {
            while (left<right && arr[start]<=arr[right])right-=1
            while (left<right && arr[start]>=arr[left])left+=1
            swap(left, right, arr)
        }
        swap(start, left, arr)
        quikSort(start, left-1, arr)
        quikSort(left+1, end, arr)
    }
    const swap=function (i, j, arr){
        let temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
    }
    quikSort(0, nums.length-1, nums)
    let zeros=0
    for(let i of nums.keys())
    {
        if(!nums[i])zeros+=1
        else if(i+1<=nums.length-1 && nums[i+1]!==nums[i]+1)
        {
            if(nums[i+1]-nums[i]-1<=zeros){zeros-=(nums[i+1]-nums[i]-1)}
            else {return false}
        }
    }
    return true
};
console.log(isStraight([9,0,1,2,5]));