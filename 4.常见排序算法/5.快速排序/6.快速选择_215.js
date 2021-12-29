var findKthLargest = function(nums, k) {
    let isFind=false
    let result

    let backtrack=function (nums,start,end){
        if(isFind){return}
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
        if(nums[low]<=basic)
        {
            if(low===nums.length-k)
            {
                result=basic
                isFind=true
                return;
            }

            nums[start]=nums[low]
            nums[low]=basic
            backtrack(nums,start,low-1)
            backtrack(nums,low+1,end)
        }
        else
        {
            if(low-1===nums.length-k)
            {
                result=basic
                isFind=true
                return;
            }
            backtrack(nums,start,low-1)
            backtrack(nums,low,end)
        }
    }

    backtrack(nums,0,nums.length-1)
    if(isFind){return result}
    return nums[nums.length-k]
}
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));