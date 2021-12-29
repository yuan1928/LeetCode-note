var fourSum = function(nums, target) {
    if(nums.length<4){return []}

    var result=[]
    var compare=function (a,b){
        if(a===b){return 0}
        return (a<b)?-1:1
    }
    nums.sort(compare)
    console.log(nums);

    for(var i of nums.keys())
    {
        if(nums[i]>target && target>=0){continue}//剪枝1
        if(((i-1)>=0)&&(nums[i-1]===nums[i])){continue}//剪枝2

        for (var j of nums.slice(i+1).keys())
        {
            if(nums[i]+nums.slice(i+1)[j]>target && target>=0){continue}//剪枝3
            if(((j-1)>=0)&&(nums.slice(i+1)[j-1]===nums.slice(i+1)[j])){continue}//剪枝4

            //var numsSub=nums.slice(i+2)
            var numsSub=nums.slice(i+1).slice(j+1)
            var left=0
            var right=numsSub.length-1
            while (left<right)
            {
                if(((left-1)>=0)&&(numsSub[left-1]===numsSub[left]))
                {
                    left+=1
                    continue
                }//剪枝5

                console.log(nums[i],nums.slice(i+1)[j],numsSub[left],numsSub[right])
                if(nums[i]+nums.slice(i+1)[j]+numsSub[left]+numsSub[right]<target){left+=1}
                else if(nums[i]+nums.slice(i+1)[j]+numsSub[left]+numsSub[right]>target){right-=1}
                else
                {
                    result.push([nums[i],nums.slice(i+1)[j],numsSub[left],numsSub[right]])
                    left+=1
                    right-=1
                }
            }
        }
    }

    return result

};

console.log(fourSum([1,-2,-5,-4,-3,3,3,5],-11));