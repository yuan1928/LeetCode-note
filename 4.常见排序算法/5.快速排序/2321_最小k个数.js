var smallestK = function(arr, k) {
    let sorted=0
    let quickSort=function (nums,start,end){
        if(sorted===k){return;}
        if(end-start+1<=1){return}

        let basic=nums[start]
        let low=start+1
        let high=end
        while (low<high)
        {
            while (nums[low]<basic)
            {
                if(low+1<=high){low+=1}
                else {break}
            }
            while (nums[high]>basic)
            {
                if(high-1>=low){high-=1}
                else {break}
            }
            let temp=nums[low]
            nums[low]=nums[high]
            nums[high]=temp

            if(low===high){break}
            if(low+1<=high-1)
            {
                low+=1
                high-=1
            }
            else {high-=1}
        }
        if(nums[low]<basic)
        {
            nums[start]=nums[low]
            nums[low]=basic
            if(low<=k)sorted+=1
            quickSort(nums,start,low-1)
            quickSort(nums,low+1,end)
        }
        else
        {
            quickSort(nums,start,low-1)
            quickSort(nums,low,end)
        }
    }
    quickSort(arr,0,arr.length-1)
    return arr.slice(0,k)
};
console.log(smallestK([1, 3, 5, 7, 2, 4, 6, 8], 6));