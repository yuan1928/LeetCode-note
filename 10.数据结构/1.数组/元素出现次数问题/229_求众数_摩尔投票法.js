/*var majorityElement = function(nums) {
    const quickSort=function (start,end){
        if(start===end)return

        let left=start+1
        let right=end
        while (left<right)
        {
            while (nums[left]<=nums[start] && left<end){left+=1}
            while (nums[right]>=nums[start] && right>left){right-=1}
            let temp=nums[left]
            nums[left]=nums[right]
            nums[right]=temp
        }

        if(nums[start]>nums[left])
        {
            let temp=nums[start]
            nums[start]=nums[left]
            nums[left]=temp
            quickSort(start,left-1)
            if(left+1<end){quickSort(left+1,end)}
        }
        else
        {
            quickSort(start,left-1)
            quickSort(left,end)
        }
    }
    quickSort(0,nums.length-1)

    let res=[]
    let step=Math.floor(nums.length/3)
    let left=0
    let right=step
    while (right<=nums.length-1)
    {
        if(nums[left]===nums[right])
        {
            res.push(nums[left])
            while (nums[right]===nums[left]){right+=1}
            left=right
            right=left+step
        }
        else
        {
            while (nums[right]!==nums[left]){right-=1}
            left=right+1
            right=left+step
        }
    }
    return res
};*/
//nums中至多存在两个出现次数都大于n/3的元素；res1、res2
var majorityElement = function(nums){
    let res1
    let res2
    let vote1=0
    let vote2=0
    for(let num of nums)//判断顺序不能改！以下顺序确保res1!==res2
    {
        if(vote1 && num===res1){vote1+=1}//res1重复出现
        else if(vote2 && num===res2){vote2+=1}
        else if(!vote1)//res1还未确定
        {
            res1=num
            vote1+=1
        }
        else if(!vote2)
        {
            res2=num
            vote2+=1
        }
        else//当前元素!==res1!==res2
        {
            vote1-=1
            vote2-=1
        }
    }

    let count1=0
    let count2=0
    for(let num of nums)//获得res1、res2实际出现次数
    {
        if(vote1 && num===res1){count1+=1}
        if(vote2 && num===res2){count2+=1}
    }

    let res=[]
    const thresh=Math.floor(nums.length/3)
    if(count1>thresh){res.push(res1)}//验证res1出现次数是否>n/3
    if(count2>thresh){res.push(res2)}
    return res
}
console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([3]));
console.log(majorityElement([1, 1, 1, 3, 3, 2, 2, 2]));