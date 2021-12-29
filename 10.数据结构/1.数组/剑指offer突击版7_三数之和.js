var threeSum = function(nums) {
    if(nums.length<3)return []

    nums.sort((a,b)=>(a-b))
    let res=[]
    let cur
    let left
    let right
    for(let i=0; i<=nums.length-3; i++)
    {
        if(i-1>=0 && nums[i]===nums[i-1])continue

        left=i+1
        right=nums.length-1
        while (left<right)
        {
            cur=nums[left]+nums[right]
            if(cur===-nums[i])
            {
                res.push([nums[i],nums[left],nums[right]])
                left+=1
                right-=1
                while (nums[left]===nums[left-1]){left+=1}
                while (nums[right]===nums[right+1]){right-=1}
            }
            else if(cur> -nums[i])
            {
                right-=1
                while (nums[right]===nums[right+1]){right-=1}
            }
            else
            {
                left+=1
                while (nums[left]===nums[left-1]){left+=1}
            }
        }
    }
    return res
};