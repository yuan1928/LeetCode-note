let quick=function (arr){
    let backtrack=function (nums,start,end){
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
            //backtrack(nums.slice(0,low)) num.slice()返回值是num的浅复制
            backtrack(nums,start,low-1)
            //backtrack(nums.slice(low+1))
            backtrack(nums,low+1,end)
        }
        else
        {
            //backtrack(nums.slice(0,low))
            backtrack(nums,start,low-1)
            //backtrack(nums.slice(low))
            backtrack(nums,low,end)
        }
    }

    backtrack(arr,0,arr.length-1)
    return arr
}
//let arr=[1, 9, 9, 8, 0, 2, 2, 1, 1, 7]
//let arr=[1,9,7,1,0,3,1,0]
let arr=[3,2,1,5,6,4]
console.log(quick(arr));
